class Product:
    def __init__(self, id: int, name: str, images: str, value: int, installments: int, installment_value: int):
        self._id = id
        self._name = name
        self._images = images
        self._value = value
        self._installments = installments
        self._installment_value = installment_value

    @property
    def id(self):
        return self._id
    
    @id.setter
    def id(self, value):
        self._id = value
    
    @property
    def name(self):
        return self._name
    
    @name.setter
    def name(self, value):
        self._name = value
    
    @property
    def images(self):
        return self._images
    
    @images.setter
    def images(self, value):
        self._images = value

    @property
    def value(self):
        return self._value
    
    @value.setter
    def value(self, value):
        self._value = value

    @property
    def installments(self):
        return self._installments

    @installments.setter
    def installments(self, value):
        self._installments = value

    @property
    def installmentsValue(self):
        return self._installment_value
    
    @installmentsValue.setter
    def installmentsValue(self, value):
        self._installment_value = value
    
    def toDict(self):
        return {
            'id': self._id,
            'name': self._name,
            'images': self._images,
            'value': self._value,
            'installments': self._installments,
            'installment_value': self._installment_value
        }
