# services disponible

## Services disponible

<mark style="color:green;">`GET`</mark> `/services.php/?apikey=API_KEY`

**Headers**

| Name         | Value              |
| ------------ | ------------------ |
| Content-Type | `application/json` |
| apikey       | `votre api`        |

**Response**

{% tabs %}
{% tab title="200" %}
```json
{
  "success": true,
  "Free": ["Service1", "Service2"],
  "Basique": ["Service3"],
  "Standard": ["Service4", "Service5"],
  "Premium": ["Service6"]
}
```
{% endtab %}

{% tab title="API non valide" %}
```
{
  "error": "Votre apikey est pas valide"
}
```
{% endtab %}

{% tab title="API non fournit" %}
```
{
  "error": "Merci de fournir une apikey"
}
```
{% endtab %}
{% endtabs %}

```
Pour les erreurs, vérifier la documentation de la requête verify
```
