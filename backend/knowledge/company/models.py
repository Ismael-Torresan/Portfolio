from django.db import models
from django.utils.translation import gettext_lazy as _
from datetime import datetime
import os
from django.core.exceptions import ValidationError


def image_validator(value):
    ext = os.path.splitext(value)
    if ext.lower() not in [".svg", "jpg", "jpeg", "png"]:
        raise ValidationError("_(format not supported)")


class Company(models.Model):
    name = models.CharField(_("name"), max_length=100, blank=False, null=False)
    cpf_cnpj = models.CharField(_("cpf cnpj"), max_length=14, blank=False, null=False)
    logo = models.FileField(
        _("logo"), null=True, blank=True, validators=[image_validator]
    )

    model_name = "company"
    app_name = "company"

    class Meta:
        verbose_name = _("Company")
        verbose_name_plural = _("Companies")

    def __str__(self) -> str:
        return self.name
