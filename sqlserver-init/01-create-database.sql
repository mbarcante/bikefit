IF NOT EXIST (SELECT name FROM sys.database WHERE name = 'bikefit')
BEGIN
    CREATE DATABASE bikefit;
END;
GO