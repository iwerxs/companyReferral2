package routehandlers

import (
	// ssg "companyReferral1/go"

	"database/sql"
	"log"
)

func Init() {
	DB, err = sql.Open("sqlite3", "./app.db")
	if err != nil {
		log.Fatal(err)
	}

	CreateTables()
}

func CreateTables() {
	queries := []string{
		`CREATE TABLE IF NOT EXISTS companies (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			name TEXT UNIQUE NOT NULL
		);`,
		`CREATE TABLE IF NOT EXISTS users (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			email TEXT UNIQUE NOT NULL,
			username TEXT NOT NULL,
			password TEXT NOT NULL,
			is_admin BOOLEAN NOT NULL DEFAULT FALSE,
			company_id INTEGER,
			FOREIGN KEY (company_id) REFERENCES companies(id)
		);`,
		`CREATE TABLE IF NOT EXISTS sessions (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			session_id TEXT UNIQUE NOT NULL,
			user_id INTEGER NOT NULL,
			expires_at DATETIME NOT NULL,
			FOREIGN KEY (user_id) REFERENCES users(id)
		);`,
		`CREATE TABLE IF NOT EXISTS comments (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			referral_request_id INTEGER,
			user_id INTEGER,
			content TEXT,
			created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
			FOREIGN KEY (referral_request_id) REFERENCES referral_requests(id),
			FOREIGN KEY (user_id) REFERENCES users(id)
		);`,
		`CREATE TABLE IF NOT EXISTS notifications (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			user_id INTEGER,
			referral_request_id INTEGER,
			message TEXT,
			created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
			FOREIGN KEY (user_id) REFERENCES users(id),
			FOREIGN KEY (referral_request_id) REFERENCES referral_requests(id)
		);`,
		`CREATE TABLE IF NOT EXISTS referral_requests (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			title TEXT NOT NULL,
			content TEXT NOT NULL,
			referrer_user_id INTEGER NOT NULL,
			company_id INTEGER,
			referee_client TEXT NOT NULL,
			referee_client_email TEXT NOT NULL,
			created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
			status TEXT NOT NULL DEFAULT 'pending',
			FOREIGN KEY (referrer_user_id) REFERENCES users(id),
			FOREIGN KEY (company_id) REFERENCES companies(id)
		);`,
	}

	for _, query := range queries {
		_, err = DB.Exec(query)
		if err != nil {
			log.Fatal(err)
		}
	}
}
