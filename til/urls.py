from django.contrib import admin
from django.urls import path, include
from feed import urls as feed_urls
from django.conf import settings
from django.conf.urls.static import static
from profiles import urls as profiles_urls




urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(feed_urls, namespace="feed")),
    path('profile/', include(profiles_urls, namespace="profiles")),
    path('accounts/', include('allauth.urls')),  # Use path instead of re_path for clarity
    
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
