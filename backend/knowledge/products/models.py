from django.db import models

from django.db import models
from django.utils.translation import gettext_lazy as _
from datetime import datetime
from company.models import Company

CATEGORY_CHOICES = (
    ("Food", _("Food")),
    ("Car", _("Car")),
    ("Clothe", _("Clothe")),
)


class Product(models.Model):
    company = models.ForeignKey(
        Company, verbose_name=_("company"), on_delete=models.RESTRICT
    )
    name = models.CharField(_("name"), max_length=100, blank=False, null=False)
    description = models.CharField(
        _("description"), max_length=100, blank=True, null=True
    )
    category = models.CharField(
        _("category"), max_length=25, blank=False, null=False, choices=CATEGORY_CHOICES
    )
    creation = models.DateTimeField(_("creation"), auto_now_add=True)

    class Meta:
        verbose_name = _("Product")
        verbose_name_plural = _("Products")

    def __str__(self) -> str:
        return self.name
