FROM python:3.12

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /src
RUN apt-get update && apt-get install -y \
    gdal-bin \
    libgdal-dev
COPY ./requirements.txt /src/
RUN pip install -r requirements.txt

ENV CPLUS_INCLUDE_PATH=/usr/include/gdal
ENV C_INCLUDE_PATH=/usr/include/gdal

ENV GDAL_LIBRARY_PATH=/usr/lib/libgdal.so

COPY . /src
WORKDIR /src

COPY . .

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]