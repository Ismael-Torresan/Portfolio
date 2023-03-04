from django.shortcuts import render
from utils.models import BaseModelListAPI, ModelListAPIView
from company.models import Company
from company.serializer import CompanySerializer


class CompanyAPIView(ModelListAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
