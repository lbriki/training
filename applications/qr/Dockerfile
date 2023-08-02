# FROM python:3.9 as base

# WORKDIR /app

# COPY requirements.txt .

# RUN python -m pip install --upgrade pip

# RUN pip install --no-cache-dir -r requirements.txt

# COPY . .

# CMD ["uvicorn", "app:atom", "--host", "0.0.0.0", "--port", "8420"]

# # Path: devops-training/applications/qr/Dockerfile
# Use a Python 3.9 base image






FROM python:3.9 as base

# Install Nginx
RUN apt-get update && apt-get install -y nginx

# Remove the default Nginx configuration file
RUN rm /etc/nginx/sites-enabled/default

# Copy the nginx.conf file to the Nginx configurations directory
COPY nginx.conf /etc/nginx/sites-available/qr
RUN ln -s /etc/nginx/sites-available/qr /etc/nginx/sites-enabled/

# Set the working directory to /app
WORKDIR /app

# Copy the requirements file to the container
COPY requirements.txt .

# Install the required Python packages
RUN python -m pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code to the container
COPY . .


# Start Nginx and the Python application using uvicorn
CMD service nginx start && uvicorn app:atom --host 0.0.0.0 --port 8420


