from django.views.generic.base import TemplateView


class HomePage(TemplateView):
    template_name = 'angular/index.html'
