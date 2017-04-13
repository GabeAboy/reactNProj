CREATE TABLE accountInfo(
  ID SERIAL PRIMARY KEY,
  FirstName varchar(225) NOT NULL,
  LastName varchar(225) NOT NULL,
  EmailAddres varchar(225) NOT NULL,
  Password varchar(225) NOT NULL
)

--REFERENCES
-- CREATE TABLE public.customers
-- (
-- 	id integer NOT NULL DEFAULT nextval('customers_pk'),
-- 	account_id integer,
-- 	first_name text,
-- 	last_name text,
-- 	PRIMARY KEY (id),
-- 	FOREIGN KEY (account_id) REFERENCES public.accounts (id)
-- );


-- INSERT INTO accountInfo(FirstName,LastName,EmailAddres,Password)
-- VALUES('john','wick','jw@gmail','abc123')
-- {
--   "FirstName":"John",
--   "LastName":"Wick",
--   "EmailAddres":"asd@aol.com",
--   "Password":"asd123"
-- }
