from application import app
from application.model.dao.productdao import ProductDAO
from flask import render_template, url_for, request

product = ProductDAO()
product_list = product.findAll()
cart_list = product.addCart()

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html', product_list=product_list, cart_list=cart_list)

@app.route('/adicionar/<int:id>')
def insert(id:int):
    for product in product_list:
        if int(id) == product.get_id():
            cart_list.append(product)
        return render_template (url_for('index'))

@app.route('/remover/<int:id>')
def remove(id:int):
    for product in cart_list:
        if int(id) == product.get_id():
            cart_list.remove(product)
        return render_template(url_for('index'))
