# Open Doors Hackathon Project

Find a company that treats you right.

---

(An Entry into LadyProblems Hackathon @ Red Bull Media House, Santa Monica)

# Developer Documentation

## Back-end Custom RESTful API Documentation

### Auth

```
/api/auth/signin {POST}
  Expected Body
    email   : STRING
    password: STRING

/api/auth/signup {POST}
  Expected Body
    username: STRING
    email   : STRING
    password: STRING
```

### Companies

Retrieving/Searching a company or list of companies:

```
/api/companies {GET}
  Optional Query Params
    id  : company id
    name: company name
    search: keywords
  Expected Response
    One Company
      success: BOOLEAN
      result :
        company: OBJECT
        reviews: ARRAY<OBJECT>
    All Companies
      success: BOOLEAN
      result : ARRAY<OBJECT>
```

Creating a new company:

```
/api/companies {POST}
  Expected Body
    name   : STRING
    address: STRING
```

### reviews

Creating a review:

```
* = Optional

/api/reviews {POST}
  Expected Body
    companyId: INTEGER
  	message: STRING
    interactions: INTEGER (0 - 5)
    harassment: INTEGER (0 - 5)
    advancement: INTEGER (0 - 5)
    familySupport: INTEGER (0 - 5)
    workLifeBalance: INTEGER (0 - 5)
    equalPay: INTEGER (0 - 5)
    *salaryCount: INTEGER
```
