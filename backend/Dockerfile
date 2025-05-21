FROM maven:3.8.5-openjdk-17 AS build
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:17.0.1-jdk-slim

RUN apt-get update && apt-get install -y ca-certificates && rm -rf /var/lib/apt/lists/*

COPY --from=build /target/Job-Portal-0.0.1-SNAPSHOT.jar Job-Portal.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","Job-Portal.jar"]
