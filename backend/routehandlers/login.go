package routehandlers

import (
	"crypto/rand"
	"database/sql"
	"encoding/base64"
	"log"
	"net/http"

	"golang.org/x/crypto/bcrypt"
)

func LoginHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method Not Allowed", http.StatusMethodNotAllowed)
		return
	}


	if r.Method == http.MethodPost {
		email := r.FormValue("email")
		password := r.FormValue("password")
		log.Println("Login attempt with email:", email)

		var storedPassword string
		var userID, companyID int
		var isAdmin bool

		err := DB.QueryRow("SELECT id, password, is_admin, company_id FROM users WHERE email = ?", email).Scan(&userID, &storedPassword, &isAdmin, &companyID)
		if err != nil {
			if err == sql.ErrNoRows {
				http.Error(w, "Invalid email or password", http.StatusUnauthorized)
			} else {
				log.Println("Error querying user:", err)
				http.Error(w, "Internal Server Error", http.StatusInternalServerError)
			}
			return
		}

		err = bcrypt.CompareHashAndPassword([]byte(storedPassword), []byte(password))
		if err != nil {
			http.Error(w, "Invalid email or password", http.StatusUnauthorized)
			return
		}

		sessionID := CreateSession(userID)
		log.Println("Session created with ID:", sessionID)

		http.SetCookie(w, &http.Cookie{
			Name:  "session_id",
			Value: sessionID,
			Path:  "/",
		})

		if isAdmin {
			http.Redirect(w, r, "/admin-profile", http.StatusSeeOther)
		} else {
			http.Redirect(w, r, "/user-profile", http.StatusSeeOther)
		}
		log.Println("Redirecting to profile page")
		return
	}

	http.Redirect(w, r, "/login", http.StatusSeeOther)
}

func CreateSession(userID int) string {
	sessionID := GenerateSecureSessionID()
	_, err := DB.Exec("INSERT INTO sessions (session_id, user_id, expires_at) VALUES (?, ?, datetime('now', '+1 hour'))", sessionID, userID)
	if err != nil {
		log.Println("Error creating session:", err)
	}
	return sessionID
}

func GenerateSecureSessionID() string {
	b := make([]byte, 32)
	_, err := rand.Read(b)
	if err != nil {
		log.Fatalf("Error generating secure session ID: %v", err)
	}
	return base64.URLEncoding.EncodeToString(b)
}

// func GetAuthenticatedUserData(r *http.Request) *ssg.PageData {
// 	cookie, err := r.Cookie("session_id")
// 	if err != nil {
// 		log.Println("Error retrieving cookie:", err)
// 		return &PageData{IsAuthenticated: false}
// 	}

// 	var userID int
// 	err = DB.QueryRow("SELECT user_id FROM sessions WHERE session_id = ? AND expires_at > datetime('now')", cookie.Value).Scan(&userID)
// 	if err != nil {
// 		if err == sql.ErrNoRows {
// 			return &PageData{IsAuthenticated: false}
// 		}
// 		log.Println("Error querying session:", err)
// 		return &PageData{IsAuthenticated: false}
// 	}

// 	var user User
// 	err = DB.QueryRow("SELECT id, email, username, is_admin, company_id FROM users WHERE id = ?", userID).Scan(&user.ID, &user.Email, &user.Username, &user.IsAdmin, &user.CompanyID)
// 	if err != nil {
// 		log.Println("Error querying user:", err)
// 		return &PageData{IsAuthenticated: false}
// 	}

// 	var company Company
// 	err = DB.QueryRow("SELECT id, name FROM companies WHERE id = ?", user.CompanyID).Scan(&company.ID, &company.Name)
// 	if err != nil {
// 		log.Println("Error querying company:", err)
// 		return &PageData{IsAuthenticated: false}
// 	}

// 	return &PageData{
// 		UserID:          user.ID,
// 		Username:        user.Username,
// 		IsAuthenticated: true,
// 		IsAdmin:         user.IsAdmin,
// 		CompanyID:       user.CompanyID,
// 		CompanyName:     company.Name,
// 	}
// }
