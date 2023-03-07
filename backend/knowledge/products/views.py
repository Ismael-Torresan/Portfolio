from django.shortcuts import render
from utils.models import BaseModelListAPI, ModelListAPIView
from products.models import Product
from products.serializer import ProductSerializer


class ProductAPIView(BaseModelListAPI):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
