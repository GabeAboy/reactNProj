CREATE TABLE accountInfo(
  ID SERIAL PRIMARY KEY,
  LastName varchar(225) NOT NULL,
  FirstName varchar(225) NOT NULL,
  EmailAddres varchar(225) NOT NULL
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
