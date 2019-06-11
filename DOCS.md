# apii v0.0.0



- [Tean](#tean)
	- [Create tean](#create-tean)
	- [Delete tean](#delete-tean)
	- [Retrieve tean](#retrieve-tean)
	- [Retrieve teans](#retrieve-teans)
	- [Update tean](#update-tean)
	


# Tean

## Create tean



	POST /Teans


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| text			| 			|  <p>Tean's text.</p>							|

## Delete tean



	DELETE /Teans/:id


## Retrieve tean



	GET /Teans/:id


## Retrieve teans



	GET /Teans


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update tean



	PUT /Teans/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| text			| 			|  <p>Tean's text.</p>							|


