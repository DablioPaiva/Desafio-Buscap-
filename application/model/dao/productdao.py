from application.model.entity.product import Product
import json
from typing import List

class ProductDAO:
    def dict_to_list(self, lista_prod):
        product_list = []
        for product_item in lista_prod:
            product = Product()
            product.set_id(product_item["id"])
            product.set_name(product_item["name"])
            product.set_imagens(product_item["images"])
            product.set_value(product_item["value"])
            product_list.append(product)
        return product_list

    def product_list(self):
        product_list = []
        with open("data.json", "r") as file:
            product_list = json.load(file)
            product_list = self.dict_to_list(product_list)
        return product_list 