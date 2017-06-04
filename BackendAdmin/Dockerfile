FROM microsoft/dotnet:1.1.1-sdk

MAINTAINER vunguyenhung

ENV ASPNETCORE_URLS=http://*:5000

WORKDIR /var/www/aspnetcore

CMD ["/bin/bash", "-c", "dotnet restore BackendAdmin.csproj && dotnet run --project BackendAdmin.csproj"]
