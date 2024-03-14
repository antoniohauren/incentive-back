CREATE TABLE IF NOT EXISTS "balance" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(256) NOT NULL,
	"description" varchar(256) NOT NULL,
	"start_money" numeric NOT NULL,
	"current_money" numeric DEFAULT start_money NOT NULL
);
