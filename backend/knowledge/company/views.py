from django.shortcuts import render
from utils.models import BaseModelListAPI
from company.models import Company
from company.serializer import CompanySerializer


class ProductAPIView(BaseModelListAPI):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
