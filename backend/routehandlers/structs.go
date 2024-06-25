package routehandlers

import (
	"database/sql"
	"time"
)

var DB *sql.DB
var err error

type User struct {
	ID        int
	Email     string
	Username  string
	IsAdmin   bool
	CompanyID int
}

type Company struct {
	ID   int
	Name string
}

type ReferralRequest struct {
	ID                 int
	Title              string
	Content            string
	ReferrerUserID     int
	CompanyID          int
	RefereeClient      string
	RefereeClientEmail string
	CreatedAt          string
	Status             string
}

type PageData struct {
	UserID           int
	Username         string
	IsAuthenticated  bool
	IsAdmin          bool
	CompanyID        int
	CompanyName      string
	CompanyUsers     []User
	UserActivities   []Activity
	ReferralRequests []ReferralRequest
}

type Activity struct {
	Message   string
	CreatedAt time.Time
}
