# Use an appropriate base image, depending on the app requirements
# For example, you might use Python or a specific framework image here
# Replace `python:3` with the appropriate base image if Python is needed

FROM python:3

# Set the working directory inside the container
WORKDIR /app

# Copy the requirements.txt file to the working directory
COPY requirements.txt .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the QR code
COPY . .

# Expose the port on which the QR app will listen (if applicable)
EXPOSE 8420

# Start the QR app
CMD ["uvicorn", "app:atom", "--host", "0.0.0.0", "--port", "8420"]
