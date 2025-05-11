<img src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460" width="120" alt="Logo" />

<br>

# Nextflix Web Application

This is the back-end service for the Nextflix web application, built using the [NestJS](https://nestjs.com/) framework. It serves as an API Gateway, connecting to external movie APIs and managing business logic and data transformation.

## Features

### Back-end
- **API Gateway**: Acts as a central point for handling API requests and responses.
- **Integration with Free Movie API**: Connects to external movie APIs to fetch movie data. This project uses the [OMDb API](https://www.omdbapi.com/) to retrieve movie information.
- **Data Transformation**: Transforms raw data from external APIs into a format suitable for the front-end.
- **Swagger Documentation**: Auto-generated API documentation for easy testing and exploration.
- **Validation and Error Handling**: Ensures data integrity and provides meaningful error messages.
- **Scalable Architecture**: Modular design for easy extension and maintenance.


## Folder Structure

```tree
├── package.json
├── src
│   ├── app.module.ts
│   ├── main.ts
│   ├── movies
│   │   ├── controllers
│   │   │   └── movie.controller.ts
│   │   ├── dtos
│   │   │   └── movie.dto.ts
│   │   ├── entities
│   │   │   └── movie.entity.ts
│   │   ├── movies.module.ts
│   │   └── services
│   │       └── movie.service.ts
│   └── utils
│       └── movie.util.ts
└── tsconfig.json
```

## Deployment
This project is production-ready and deployed on platforms  Render. The current production version is available at: [Nextflix Back-end Swagger.](https://bff-nextflix.onrender.com/swagger)

> Note : This application is currently hosted on Render's free plan, which is designed for testing and development purposes. As per Render's policy, free web services automatically "spin down" after 15 minutes of inactivity. This means that if the application doesn't receive any incoming requests within this period, it temporarily shuts down to conserve resources. which can take up to a minute. During this startup time, users may experience a delay in loading the application.