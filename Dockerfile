# Usage
# docker build -t ulricdo1/hikeplanner .
# docker run --name hikeplanner -e AZURE_STORAGE_CONNECTION_STRING='***' -p 9001:5000 -d ulricdo1/hikeplanner

FROM python:3.12.1

# Copy Files
WORKDIR /usr/src/app
COPY backend/service.py backend/service.py
COPY frontend/build frontend/build

# Install
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

# Docker Run Command
EXPOSE 80
ENV FLASK_APP=/usr/src/app/backend/service.py
CMD [ "python", "-m" , "flask", "run", "--host=0.0.0.0", "--port=80"]docker buildx build --platform linux/arm64 -t dominiqueulrixh/mdm-hikeplanner .
