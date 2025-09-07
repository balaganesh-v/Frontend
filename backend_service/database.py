from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from config import settings

#Load database url from config file instead of inserting using settings function
engine = create_engine(settings.DATABASE_URL, pool_pre_ping=True) #Create a new SQLAlchemy engine instance which connects to the database 
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine) #SessionMaker instance used to create sessions read,insert,update,delete
Base = declarative_base() #Function to create a base class for your ORM models

# Dependency for routers
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
