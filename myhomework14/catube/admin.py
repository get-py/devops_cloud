from django.contrib import admin
from catube.models import Vidoe


class VideoAdmin(admin.ModelAdmin):
    pass


admin.site.register(Vidoe, VideoAdmin)


