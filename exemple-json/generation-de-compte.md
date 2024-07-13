# Génération de compte

## Generateur de compte

<mark style="color:green;">`GET`</mark> `/generate.php`

**Headers**

| Name         | Value                         |
| ------------ | ----------------------------- |
| Content-Type | `application/json`            |
| apikey       | `votre api`                   |
| plangen      | free/basique/standard/premium |
| service      | nom\_du\_service              |

```
apikey= Votre API_KEY
plangen= sois free / basique / standard / premium
c'est votre plan lier à votre compte

service = nom du service à générer,
référé vous a la requete service disponible
```

**Response**

{% tabs %}
{% tab title="200" %}
```json
{
  "success": true,
  "email": "test@gmail.com",
  "password": "password1234",
  "coins": -3
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

{% tab title="Pas assez de coins" %}
```
{
  "error": "Solde de coins insuffisant"
}
```
{% endtab %}

{% tab title="Service existe pas" %}
```
{
  "error": "Le service souhaité n'existe pas"
}
```
{% endtab %}
{% endtabs %}

```
Pour les erreurs, vérifier la documentation de la requête verify
```

{% hint style="danger" %}
ATTENTION !!!!
{% endhint %}

{% code overflow="wrap" %}
```
ATTENTION SOLDE:
Lorsque vous effectuez cette requete, cela vous déduit votre solde de coin.
Voici le tableau de solde déduit:

Free = 4 coins retiré
Basique = 3 coins retiré
Standard = 2 coins retiré
Premium = 1 coins retiré

Si vous êtes premium utiliser bien premium et non un autre inférieur pour éviter une déduction trop éléver par apport à votre plan.
Si vous êtres Standard et que vous utilisez Basique, vous serez perdant de -1 coins.

Donc faite attention à bien choisir le plan qui vous est lier à votre profil.
```
{% endcode %}
