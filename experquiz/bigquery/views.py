from django.shortcuts import render
from django.http import HttpResponse
from google.cloud import bigquery
import json
import os
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "C://Users//HABIB//Desktop//My First Project-22f0f390b8ad.json"


def index(request):
    return render(request, 'index.html')

def update(request):
    if request.is_ajax():
        client = bigquery.Client()
        query1 = (
        'SELECT '
        'licenses.license as license, '
        'count(*) as total '
        'FROM '
        '`bigquery-public-data.github_repos.sample_repos` as repo inner join `bigquery-public-data.github_repos.licenses` as licenses on repo.repo_name = licenses.repo_name '
        'GROUP BY license '
        'order by total desc '
        'LIMIT '
        '5'
        )
        query2 = (
        'SELECT '
        'arr.name AS LANGUAGE, '
        'sum(arr.bytes) AS total_bytes '
        'FROM '
        '`bigquery-public-data.github_repos.languages`, '
        'UNNEST(LANGUAGE) arr '
        'GROUP BY language '
        'order by total_bytes desc '
        'LIMIT '
        '10'
        )  
        rows1 = client.query(query1)
        rows2 = client.query(query2)
        licenses = []
        totals = []
        languages = []
        totals_bytes = []
        for row in rows1:
            licenses.append(row.license)
            totals.append(row.total)
        for row in rows2:
            languages.append(row.LANGUAGE)
            totals_bytes.append(row.total_bytes)
        context = {
            'licenses': licenses,
            'totals': totals,
            'languages': languages,
            'totals_bytes': totals_bytes,
        }
        return HttpResponse(json.dumps(context),
            content_type='application/json')

    return render(request, 'index.html', {'': ''})