from django.shortcuts import render
from utils.models import BaseModelListAPI, ModelListAPIView
from products.models import Product
from products.serializer import ProductSerializer

app_name = "Product"


class ProductAPIView(BaseModelListAPI):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    # model = Product
    # app_name = app_name
