#
# Build stage
#
FROM maven:3.8-openjdk-11-slim AS builder
COPY src /home/app/src
COPY pom.xml /home/app
RUN mvn -f /home/app/pom.xml clean package

#
# Run stage
#
FROM openjdk:11.0.2-jre-slim
COPY --from=builder /home/app/target/*.jar /app/
RUN addgroup --system spring && adduser --system --group spring
USER spring:spring
EXPOSE 8091
ENTRYPOINT ["java","-jar","/app/Lab03-consumer-0.0.1-SNAPSHOT.jar"]
