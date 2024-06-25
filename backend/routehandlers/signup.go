package routehandlers

import (
	"database/sql"
	"log"
	"net/http"

	"golang.org/x/crypto/bcrypt"
)

type SignUpRequest struct {
	Name     string `json:"name"`
	Email    string `json:"email"`
	Company  string `json:"company"`
	Password string `json:"password"`
}

func SignupHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method Not Allowed", http.StatusMethodNotAllowed)
		return
	}

	if r.Method == http.MethodPost {
		// email := r.FormValue("email")
		// username := r.FormValue("username")
		password := r.FormValue("password")
		// companyName := r.FormValue("company")
		// permission := r.FormValue("permission")

		_, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
		if err != nil {
			log.Println("Error hashing password:", err)
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
			return
		}

		var req SignUpRequest
		// var companyID int
		// err = DB.QueryRow("SELECT id FROM companies WHERE name = ?", Company).Scan(&companyID)
		if err == sql.ErrNoRows {
			_, err := DB.Exec("INSERT INTO companies (name) VALUES (?)", req.Company)
			if err != nil {
				log.Println("Error inserting company:", err)
				http.Error(w, "Internal Server Error", http.StatusInternalServerError)
				return
			}
			// companyID64, err := result.LastInsertId()
			// if err != nil {
			// 	log.Println("Error getting company ID:", err)
			// 	http.Error(w, "Internal Server Error", http.StatusInternalServerError)
			// 	return
			// }
			// companyID = int(companyID64)
		} else if err != nil {
			log.Println("Error querying company:", err)
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
			return
		}

		// isAdmin := false
		// if permission == "admin" {
		// 	isAdmin = true
		// }

		_, err = DB.Exec("INSERT INTO users (email, name, password, company) VALUES (?, ?, ?, ?)", req.Email, req.Name, req.Password, req.Company)
		if err != nil {
			log.Println("Error inserting user:", err)
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
			return
		}
		return
	}
	// Respond with success
	w.WriteHeader(http.StatusCreated)
}
