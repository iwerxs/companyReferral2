package main

import (
	"log"
	"net/http"
	"referralPlatform/routehandlers"
	"time"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

type User struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

func main() {
	/*SERVER SETTINGS*/
	r := mux.NewRouter()

	headersOk := handlers.AllowedHeaders([]string{"X-Requested-With", "Accept", "Content-Type", "Authorization"})
	originsOk := handlers.AllowedOrigins([]string{"*"})
	methodsOk := handlers.AllowedMethods([]string{"GET", "HEAD", "POST", "PUT", "DELETE", "OPTIONS"})

	// Attach CORS middleware to your router
	r.Use(handlers.CORS(originsOk, headersOk, methodsOk))

	srv := &http.Server{
		Handler:      r,
		Addr:         "localhost:8080",
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
	}

	r.Handle("/signup", http.HandlerFunc(routehandlers.SignupHandler))
	r.Handle("/login", http.HandlerFunc(routehandlers.LoginHandler))

	/*LISTEN AND SERVER*/
	log.Printf("Server running on %s", srv.Addr)
	log.Fatal(srv.ListenAndServe())

}

// // main.go
// package main

// import (
// 	"encoding/json"
// 	"log"
// 	"net/http"
// )

// type User struct {
//     Username string `json:"username"`
//     Password string `json:"password"`
// }

// func registerHandler(w http.ResponseWriter, r *http.Request) {
//     var user User
//     json.NewDecoder(r.Body).Decode(&user)
//     // Handle user registration logic (e.g., save to DB)
//     w.WriteHeader(http.StatusCreated)
// }

// func loginHandler(w http.ResponseWriter, r *http.Request) {
//     var user User
//     json.NewDecoder(r.Body).Decode(&user)
//     // Handle user login logic (e.g., verify credentials)
//     w.WriteHeader(http.StatusOK)
// }

// func main() {
//     http.HandleFunc("/api/register", registerHandler)
//     http.HandleFunc("/api/login", loginHandler)
//     log.Fatal(http.ListenAndServe(":8080", nil))
// }

// // package main

// // import (
// // 	"net/http"

// // 	"referralPlatform1/backend"

// // 	"github.com/gin-gonic/contrib/static"
// // 	"github.com/gin-gonic/gin"
// // )

// // func main() {
// //   // Set the router as the default one shipped with Gin
// //   router := gin.Default()

// //   // Serve frontend static files
// //   router.Use(static.Serve("/", static.LocalFile("/frontend", true)))

// //   // Setup route group for the API
// //   api := router.Group("/api")
// //   {
// //     api.GET("/", func(c *gin.Context) {
// //       c.JSON(http.StatusOK, gin.H {
// //         "message": "pong",
// //       })
// //     })
// //   }

// //   // Start and run the server
// //   router.Run(":3000")

// //   api.GET("/signup", backend.SignupHandler)
// //   api.GET("/login", backend.LoginHandler)
// // //   api.POST("/signup/success", ssg.SignupSuccess)
// // }
