
let sampleRecipes = [
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_b65931a130aed7b1f69b553111f4f0bc",
        "label": "Baked Potato Snack",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/c03/c03870c0284bdb80902ce95f24187714.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIAs2fBjkEzVJk%2F1OQPDuoVtuVTUf37KrveWp2TuWAiBVAiBCvepbr4JJ83VLpEB6YZIVap76705x9RDXOYrZ0BdctSrCBQiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMCiVZWBZi36dG3dthKpYFZ1wTVWuifefe5XCZYQM%2FtbQslxNRUQI4w75RB09guanYR%2B9pie0n73ewaiwpq3%2Bm5O3tBniA97kirAv6XLN%2BdgO44hktWFq1NbOYmwG%2FH4Go5nh9o8t0PkHThE1yzSWyLOeRUoPQ2lfz4qsC0Ucfv7DBjpVbRIfNhXqIYdMvTOxIqAzKMzHKbz1HgJiyEEA%2BGd4C73XpiWkpbzr1zmWFOEeYluiKICNkr4tNMYFfJlQXhqcv%2B%2B8CjhTU71Lx92nnHVwBiIqyv7%2B%2FoJDEquaOSEUOezsf26GbI9V1c8DVS%2ByJzZ11HC0AUzSCFUL1PLn7eP8tFbPCOK2ZRY2Tsa%2Bt%2BCSMgIOiQryktnvpnoxfzbgiNtuMbUe67AjDPGyTYLECMVZYcXXICTRxzYtptd%2Fr%2FHvDeNywwswjn%2FhRUwNg7PUFwwMyRGnA4kr03HnrUDJxQ8AJofufbzwRERizUCNGYwb%2BjZk22znMinKugwB9pHRVz0NcgiFZViBjrb47Sp3ZjtkYaKSZBMTRhcLMsQ2sWWMX0cbv0oljE1kcLtNi1dMfcntWSgJPFRgUFSUK0B5o%2Fut8EnrTKQNcZ9hXvxD%2F9kuehlT3Ppr1r%2Fl0KiHammildZMwn6B%2BXK%2FfoQyBfhdNQEeoo8lF2Mt592cgI2g3T8PxxbDFZqk17rmx6yVOnl8OSRxjZ506iXwnBBpFqMx%2FC5N8icHsswlz3dW%2FQfHwosAo9Gdy74nF7tW3fFeDiwwTty6KPl35c%2F0WwAw%2BP5qxWSF3Ltr8rF4l26LvrT4yw9JN7oBXxd%2B%2BG2i25QI0Li1NWB9jLg37%2BOSdtmpW34YHno82tSgwFI50SI96Z8jr%2BBZgT2hB%2FTXyrhEtMafGsiEWKRYggUMwzeHkoAY6sgFCHxNh5uMZ6WQKr7GdWZ9FQUMtWJseE1KE5mVeg2B5qiLWAIREupCMaHy5EuzSt23Q9OV9wV4mZn%2F2XFJwbnOya0hoMzA0pivIyuQwZjMW9DtN%2B5Gvct3u7ID%2Fc7U4VCYDA00K%2BSOuEPgTziUpFmqlwTuMmWXe%2BCQI2%2Bv6NWdIUvpAhGcQYJPVrJmtG1Ste5jLYpdng6lZN5TdiKHiuUbZwr78%2F13nELBjC%2F4ScDa1%2F%2BnD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230321T051254Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFLAXK57H3%2F20230321%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=bec5874dcf816a5dfd2f216880ef0c085c92b55fae996cbfb12990faf5dcede9",
        "images": {
          "THUMBNAIL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c03/c03870c0284bdb80902ce95f24187714-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIAs2fBjkEzVJk%2F1OQPDuoVtuVTUf37KrveWp2TuWAiBVAiBCvepbr4JJ83VLpEB6YZIVap76705x9RDXOYrZ0BdctSrCBQiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMCiVZWBZi36dG3dthKpYFZ1wTVWuifefe5XCZYQM%2FtbQslxNRUQI4w75RB09guanYR%2B9pie0n73ewaiwpq3%2Bm5O3tBniA97kirAv6XLN%2BdgO44hktWFq1NbOYmwG%2FH4Go5nh9o8t0PkHThE1yzSWyLOeRUoPQ2lfz4qsC0Ucfv7DBjpVbRIfNhXqIYdMvTOxIqAzKMzHKbz1HgJiyEEA%2BGd4C73XpiWkpbzr1zmWFOEeYluiKICNkr4tNMYFfJlQXhqcv%2B%2B8CjhTU71Lx92nnHVwBiIqyv7%2B%2FoJDEquaOSEUOezsf26GbI9V1c8DVS%2ByJzZ11HC0AUzSCFUL1PLn7eP8tFbPCOK2ZRY2Tsa%2Bt%2BCSMgIOiQryktnvpnoxfzbgiNtuMbUe67AjDPGyTYLECMVZYcXXICTRxzYtptd%2Fr%2FHvDeNywwswjn%2FhRUwNg7PUFwwMyRGnA4kr03HnrUDJxQ8AJofufbzwRERizUCNGYwb%2BjZk22znMinKugwB9pHRVz0NcgiFZViBjrb47Sp3ZjtkYaKSZBMTRhcLMsQ2sWWMX0cbv0oljE1kcLtNi1dMfcntWSgJPFRgUFSUK0B5o%2Fut8EnrTKQNcZ9hXvxD%2F9kuehlT3Ppr1r%2Fl0KiHammildZMwn6B%2BXK%2FfoQyBfhdNQEeoo8lF2Mt592cgI2g3T8PxxbDFZqk17rmx6yVOnl8OSRxjZ506iXwnBBpFqMx%2FC5N8icHsswlz3dW%2FQfHwosAo9Gdy74nF7tW3fFeDiwwTty6KPl35c%2F0WwAw%2BP5qxWSF3Ltr8rF4l26LvrT4yw9JN7oBXxd%2B%2BG2i25QI0Li1NWB9jLg37%2BOSdtmpW34YHno82tSgwFI50SI96Z8jr%2BBZgT2hB%2FTXyrhEtMafGsiEWKRYggUMwzeHkoAY6sgFCHxNh5uMZ6WQKr7GdWZ9FQUMtWJseE1KE5mVeg2B5qiLWAIREupCMaHy5EuzSt23Q9OV9wV4mZn%2F2XFJwbnOya0hoMzA0pivIyuQwZjMW9DtN%2B5Gvct3u7ID%2Fc7U4VCYDA00K%2BSOuEPgTziUpFmqlwTuMmWXe%2BCQI2%2Bv6NWdIUvpAhGcQYJPVrJmtG1Ste5jLYpdng6lZN5TdiKHiuUbZwr78%2F13nELBjC%2F4ScDa1%2F%2BnD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230321T051254Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFLAXK57H3%2F20230321%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a5f97c909ae059bddae49002cab2078245ceeb166740d28f567119937d11772e",
            "width": 100,
            "height": 100
          },
          "SMALL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c03/c03870c0284bdb80902ce95f24187714-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIAs2fBjkEzVJk%2F1OQPDuoVtuVTUf37KrveWp2TuWAiBVAiBCvepbr4JJ83VLpEB6YZIVap76705x9RDXOYrZ0BdctSrCBQiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMCiVZWBZi36dG3dthKpYFZ1wTVWuifefe5XCZYQM%2FtbQslxNRUQI4w75RB09guanYR%2B9pie0n73ewaiwpq3%2Bm5O3tBniA97kirAv6XLN%2BdgO44hktWFq1NbOYmwG%2FH4Go5nh9o8t0PkHThE1yzSWyLOeRUoPQ2lfz4qsC0Ucfv7DBjpVbRIfNhXqIYdMvTOxIqAzKMzHKbz1HgJiyEEA%2BGd4C73XpiWkpbzr1zmWFOEeYluiKICNkr4tNMYFfJlQXhqcv%2B%2B8CjhTU71Lx92nnHVwBiIqyv7%2B%2FoJDEquaOSEUOezsf26GbI9V1c8DVS%2ByJzZ11HC0AUzSCFUL1PLn7eP8tFbPCOK2ZRY2Tsa%2Bt%2BCSMgIOiQryktnvpnoxfzbgiNtuMbUe67AjDPGyTYLECMVZYcXXICTRxzYtptd%2Fr%2FHvDeNywwswjn%2FhRUwNg7PUFwwMyRGnA4kr03HnrUDJxQ8AJofufbzwRERizUCNGYwb%2BjZk22znMinKugwB9pHRVz0NcgiFZViBjrb47Sp3ZjtkYaKSZBMTRhcLMsQ2sWWMX0cbv0oljE1kcLtNi1dMfcntWSgJPFRgUFSUK0B5o%2Fut8EnrTKQNcZ9hXvxD%2F9kuehlT3Ppr1r%2Fl0KiHammildZMwn6B%2BXK%2FfoQyBfhdNQEeoo8lF2Mt592cgI2g3T8PxxbDFZqk17rmx6yVOnl8OSRxjZ506iXwnBBpFqMx%2FC5N8icHsswlz3dW%2FQfHwosAo9Gdy74nF7tW3fFeDiwwTty6KPl35c%2F0WwAw%2BP5qxWSF3Ltr8rF4l26LvrT4yw9JN7oBXxd%2B%2BG2i25QI0Li1NWB9jLg37%2BOSdtmpW34YHno82tSgwFI50SI96Z8jr%2BBZgT2hB%2FTXyrhEtMafGsiEWKRYggUMwzeHkoAY6sgFCHxNh5uMZ6WQKr7GdWZ9FQUMtWJseE1KE5mVeg2B5qiLWAIREupCMaHy5EuzSt23Q9OV9wV4mZn%2F2XFJwbnOya0hoMzA0pivIyuQwZjMW9DtN%2B5Gvct3u7ID%2Fc7U4VCYDA00K%2BSOuEPgTziUpFmqlwTuMmWXe%2BCQI2%2Bv6NWdIUvpAhGcQYJPVrJmtG1Ste5jLYpdng6lZN5TdiKHiuUbZwr78%2F13nELBjC%2F4ScDa1%2F%2BnD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230321T051254Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFLAXK57H3%2F20230321%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=14b690c86ce8c33fcdcc86c17e62cdc951053d958dd3712334932898fca82e8d",
            "width": 200,
            "height": 200
          },
          "REGULAR": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c03/c03870c0284bdb80902ce95f24187714.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIAs2fBjkEzVJk%2F1OQPDuoVtuVTUf37KrveWp2TuWAiBVAiBCvepbr4JJ83VLpEB6YZIVap76705x9RDXOYrZ0BdctSrCBQiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMCiVZWBZi36dG3dthKpYFZ1wTVWuifefe5XCZYQM%2FtbQslxNRUQI4w75RB09guanYR%2B9pie0n73ewaiwpq3%2Bm5O3tBniA97kirAv6XLN%2BdgO44hktWFq1NbOYmwG%2FH4Go5nh9o8t0PkHThE1yzSWyLOeRUoPQ2lfz4qsC0Ucfv7DBjpVbRIfNhXqIYdMvTOxIqAzKMzHKbz1HgJiyEEA%2BGd4C73XpiWkpbzr1zmWFOEeYluiKICNkr4tNMYFfJlQXhqcv%2B%2B8CjhTU71Lx92nnHVwBiIqyv7%2B%2FoJDEquaOSEUOezsf26GbI9V1c8DVS%2ByJzZ11HC0AUzSCFUL1PLn7eP8tFbPCOK2ZRY2Tsa%2Bt%2BCSMgIOiQryktnvpnoxfzbgiNtuMbUe67AjDPGyTYLECMVZYcXXICTRxzYtptd%2Fr%2FHvDeNywwswjn%2FhRUwNg7PUFwwMyRGnA4kr03HnrUDJxQ8AJofufbzwRERizUCNGYwb%2BjZk22znMinKugwB9pHRVz0NcgiFZViBjrb47Sp3ZjtkYaKSZBMTRhcLMsQ2sWWMX0cbv0oljE1kcLtNi1dMfcntWSgJPFRgUFSUK0B5o%2Fut8EnrTKQNcZ9hXvxD%2F9kuehlT3Ppr1r%2Fl0KiHammildZMwn6B%2BXK%2FfoQyBfhdNQEeoo8lF2Mt592cgI2g3T8PxxbDFZqk17rmx6yVOnl8OSRxjZ506iXwnBBpFqMx%2FC5N8icHsswlz3dW%2FQfHwosAo9Gdy74nF7tW3fFeDiwwTty6KPl35c%2F0WwAw%2BP5qxWSF3Ltr8rF4l26LvrT4yw9JN7oBXxd%2B%2BG2i25QI0Li1NWB9jLg37%2BOSdtmpW34YHno82tSgwFI50SI96Z8jr%2BBZgT2hB%2FTXyrhEtMafGsiEWKRYggUMwzeHkoAY6sgFCHxNh5uMZ6WQKr7GdWZ9FQUMtWJseE1KE5mVeg2B5qiLWAIREupCMaHy5EuzSt23Q9OV9wV4mZn%2F2XFJwbnOya0hoMzA0pivIyuQwZjMW9DtN%2B5Gvct3u7ID%2Fc7U4VCYDA00K%2BSOuEPgTziUpFmqlwTuMmWXe%2BCQI2%2Bv6NWdIUvpAhGcQYJPVrJmtG1Ste5jLYpdng6lZN5TdiKHiuUbZwr78%2F13nELBjC%2F4ScDa1%2F%2BnD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230321T051254Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFLAXK57H3%2F20230321%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=bec5874dcf816a5dfd2f216880ef0c085c92b55fae996cbfb12990faf5dcede9",
            "width": 300,
            "height": 300
          }
        },
        "source": "Martha Stewart",
        "url": "https://www.marthastewart.com/353269/baked-potato-snack",
        "shareAs": "http://www.edamam.com/recipe/baked-potato-snack-b65931a130aed7b1f69b553111f4f0bc/potato",
        "yield": 2,
        "dietLabels": [
          "Low-Fat"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Vegan",
          "Vegetarian",
          "Pescatarian",
          "Mediterranean",
          "DASH",
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "No oil added",
          "Sulfite-Free",
          "FODMAP-Free",
          "Kosher"
        ],
        "cautions": [],
        "ingredientLines": [
          "1 medium sweet potato, or baking potato",
          "Salt and freshly ground black pepper"
        ],
        "ingredients": [
          {
            "text": "1 medium sweet potato, or baking potato",
            "quantity": 1,
            "measure": "potato",
            "food": "baking potato",
            "weight": 244.95555555555555,
            "foodCategory": "vegetables",
            "foodId": "food_brsjy86bq09pzgbmr4ri8bnohrf7",
            "image": "https://www.edamam.com/food-img/71b/71b3756ecfd3d1efa075874377038b67.jpg"
          },
          {
            "text": "Salt and freshly ground black pepper",
            "quantity": 0,
            "measure": null,
            "food": "Salt",
            "weight": 1.4697333333333333,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "Salt and freshly ground black pepper",
            "quantity": 0,
            "measure": null,
            "food": "black pepper",
            "weight": 0.7348666666666667,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
          }
        ],
        "calories": 195.35940422222222,
        "totalWeight": 247.13258490336733,
        "totalTime": 0,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "brunch",
          "snack"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 195.35940422222222,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 0.21992109777777777,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 0.07391778844444444,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 0.010329775777777777,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 0.1126648582222222,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 44.73341612222222,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 41.36307263333333,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 3.3703434888888886,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 1.523427591111111,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 5.318401535555556,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 571.3481630693334,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 35.445800599030385,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 57.610821404589224,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 1031.3464176811583,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 2.18273246795889,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 0.7205581871255896,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 135.8866448888889,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 0.198414,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 13.962466666666666,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.20165721155555555,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.08215809333333333,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 2.5436895259999996,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.8472351286666666,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 34.41870511111111,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 34.41870511111111,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 0.03213816888888889,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 5.6121767333333334,
            "unit": "µg"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 192.5805242675845,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 9.76797021111111,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 0.33834015042735044,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 0.36958894222222216,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 14.911138707407408,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 13.481373955555554,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 10.636803071111112,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 23.806173461222226,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 3.5445800599030384,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 13.716862239187911,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 21.943540801726773,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 12.1262914886605,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 6.550528973868996,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 19.41237784126984,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 0.022046,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 15.513851851851852,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 16.80476762962963,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 6.319853333333333,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 15.898059537499998,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 65.17193297435897,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 8.604676277777777,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 0.21425445925925926,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 4.6768139444444445,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 0.21992109777777777,
            "hasRDI": true,
            "daily": 0.33834015042735044,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 0.07391778844444444,
                "hasRDI": true,
                "daily": 0.36958894222222216,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 0.010329775777777777,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 0.1126648582222222,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 44.73341612222222,
            "hasRDI": true,
            "daily": 14.911138707407408,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 41.36307263333333,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 3.3703434888888886,
                "hasRDI": true,
                "daily": 13.481373955555554,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 1.523427591111111,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 5.318401535555556,
            "hasRDI": true,
            "daily": 10.636803071111112,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 571.3481630693334,
            "hasRDI": true,
            "daily": 23.806173461222226,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 35.445800599030385,
            "hasRDI": true,
            "daily": 3.5445800599030384,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 57.610821404589224,
            "hasRDI": true,
            "daily": 13.716862239187911,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 1031.3464176811583,
            "hasRDI": true,
            "daily": 21.943540801726773,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 2.18273246795889,
            "hasRDI": true,
            "daily": 12.1262914886605,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 0.7205581871255896,
            "hasRDI": true,
            "daily": 6.550528973868996,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 135.8866448888889,
            "hasRDI": true,
            "daily": 19.41237784126984,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 0.198414,
            "hasRDI": true,
            "daily": 0.022046,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 13.962466666666666,
            "hasRDI": true,
            "daily": 15.513851851851852,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 0.20165721155555555,
            "hasRDI": true,
            "daily": 16.80476762962963,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 0.08215809333333333,
            "hasRDI": true,
            "daily": 6.319853333333333,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 2.5436895259999996,
            "hasRDI": true,
            "daily": 15.898059537499998,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 0.8472351286666666,
            "hasRDI": true,
            "daily": 65.17193297435897,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 34.41870511111111,
            "hasRDI": true,
            "daily": 8.604676277777777,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 34.41870511111111,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 0.03213816888888889,
            "hasRDI": true,
            "daily": 0.21425445925925926,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 5.6121767333333334,
            "hasRDI": true,
            "daily": 4.6768139444444445,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 192.5805242675845,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          }
        ]
      },
      "_links": {
        "self": {
          "title": "Self",
          "href": "https://api.edamam.com/api/recipes/v2/b65931a130aed7b1f69b553111f4f0bc?type=public&app_id=cc240aca&app_key=0a8c95e6cec1cf2d3976f987892f75d7"
        }
      }
    },
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_75dc8fffe73f4de140e53cc3c9f865f8",
        "label": "Sweet potato crisps",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/680/680525794659eec4b5ba4ad54ef10cc5.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIAs2fBjkEzVJk%2F1OQPDuoVtuVTUf37KrveWp2TuWAiBVAiBCvepbr4JJ83VLpEB6YZIVap76705x9RDXOYrZ0BdctSrCBQiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMCiVZWBZi36dG3dthKpYFZ1wTVWuifefe5XCZYQM%2FtbQslxNRUQI4w75RB09guanYR%2B9pie0n73ewaiwpq3%2Bm5O3tBniA97kirAv6XLN%2BdgO44hktWFq1NbOYmwG%2FH4Go5nh9o8t0PkHThE1yzSWyLOeRUoPQ2lfz4qsC0Ucfv7DBjpVbRIfNhXqIYdMvTOxIqAzKMzHKbz1HgJiyEEA%2BGd4C73XpiWkpbzr1zmWFOEeYluiKICNkr4tNMYFfJlQXhqcv%2B%2B8CjhTU71Lx92nnHVwBiIqyv7%2B%2FoJDEquaOSEUOezsf26GbI9V1c8DVS%2ByJzZ11HC0AUzSCFUL1PLn7eP8tFbPCOK2ZRY2Tsa%2Bt%2BCSMgIOiQryktnvpnoxfzbgiNtuMbUe67AjDPGyTYLECMVZYcXXICTRxzYtptd%2Fr%2FHvDeNywwswjn%2FhRUwNg7PUFwwMyRGnA4kr03HnrUDJxQ8AJofufbzwRERizUCNGYwb%2BjZk22znMinKugwB9pHRVz0NcgiFZViBjrb47Sp3ZjtkYaKSZBMTRhcLMsQ2sWWMX0cbv0oljE1kcLtNi1dMfcntWSgJPFRgUFSUK0B5o%2Fut8EnrTKQNcZ9hXvxD%2F9kuehlT3Ppr1r%2Fl0KiHammildZMwn6B%2BXK%2FfoQyBfhdNQEeoo8lF2Mt592cgI2g3T8PxxbDFZqk17rmx6yVOnl8OSRxjZ506iXwnBBpFqMx%2FC5N8icHsswlz3dW%2FQfHwosAo9Gdy74nF7tW3fFeDiwwTty6KPl35c%2F0WwAw%2BP5qxWSF3Ltr8rF4l26LvrT4yw9JN7oBXxd%2B%2BG2i25QI0Li1NWB9jLg37%2BOSdtmpW34YHno82tSgwFI50SI96Z8jr%2BBZgT2hB%2FTXyrhEtMafGsiEWKRYggUMwzeHkoAY6sgFCHxNh5uMZ6WQKr7GdWZ9FQUMtWJseE1KE5mVeg2B5qiLWAIREupCMaHy5EuzSt23Q9OV9wV4mZn%2F2XFJwbnOya0hoMzA0pivIyuQwZjMW9DtN%2B5Gvct3u7ID%2Fc7U4VCYDA00K%2BSOuEPgTziUpFmqlwTuMmWXe%2BCQI2%2Bv6NWdIUvpAhGcQYJPVrJmtG1Ste5jLYpdng6lZN5TdiKHiuUbZwr78%2F13nELBjC%2F4ScDa1%2F%2BnD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230321T051254Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFLAXK57H3%2F20230321%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=dfbab4308eb06cc7d0b12738d51361d581a57f52fcd5370bb62c47239af972ff",
        "images": {
          "THUMBNAIL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/680/680525794659eec4b5ba4ad54ef10cc5-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIAs2fBjkEzVJk%2F1OQPDuoVtuVTUf37KrveWp2TuWAiBVAiBCvepbr4JJ83VLpEB6YZIVap76705x9RDXOYrZ0BdctSrCBQiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMCiVZWBZi36dG3dthKpYFZ1wTVWuifefe5XCZYQM%2FtbQslxNRUQI4w75RB09guanYR%2B9pie0n73ewaiwpq3%2Bm5O3tBniA97kirAv6XLN%2BdgO44hktWFq1NbOYmwG%2FH4Go5nh9o8t0PkHThE1yzSWyLOeRUoPQ2lfz4qsC0Ucfv7DBjpVbRIfNhXqIYdMvTOxIqAzKMzHKbz1HgJiyEEA%2BGd4C73XpiWkpbzr1zmWFOEeYluiKICNkr4tNMYFfJlQXhqcv%2B%2B8CjhTU71Lx92nnHVwBiIqyv7%2B%2FoJDEquaOSEUOezsf26GbI9V1c8DVS%2ByJzZ11HC0AUzSCFUL1PLn7eP8tFbPCOK2ZRY2Tsa%2Bt%2BCSMgIOiQryktnvpnoxfzbgiNtuMbUe67AjDPGyTYLECMVZYcXXICTRxzYtptd%2Fr%2FHvDeNywwswjn%2FhRUwNg7PUFwwMyRGnA4kr03HnrUDJxQ8AJofufbzwRERizUCNGYwb%2BjZk22znMinKugwB9pHRVz0NcgiFZViBjrb47Sp3ZjtkYaKSZBMTRhcLMsQ2sWWMX0cbv0oljE1kcLtNi1dMfcntWSgJPFRgUFSUK0B5o%2Fut8EnrTKQNcZ9hXvxD%2F9kuehlT3Ppr1r%2Fl0KiHammildZMwn6B%2BXK%2FfoQyBfhdNQEeoo8lF2Mt592cgI2g3T8PxxbDFZqk17rmx6yVOnl8OSRxjZ506iXwnBBpFqMx%2FC5N8icHsswlz3dW%2FQfHwosAo9Gdy74nF7tW3fFeDiwwTty6KPl35c%2F0WwAw%2BP5qxWSF3Ltr8rF4l26LvrT4yw9JN7oBXxd%2B%2BG2i25QI0Li1NWB9jLg37%2BOSdtmpW34YHno82tSgwFI50SI96Z8jr%2BBZgT2hB%2FTXyrhEtMafGsiEWKRYggUMwzeHkoAY6sgFCHxNh5uMZ6WQKr7GdWZ9FQUMtWJseE1KE5mVeg2B5qiLWAIREupCMaHy5EuzSt23Q9OV9wV4mZn%2F2XFJwbnOya0hoMzA0pivIyuQwZjMW9DtN%2B5Gvct3u7ID%2Fc7U4VCYDA00K%2BSOuEPgTziUpFmqlwTuMmWXe%2BCQI2%2Bv6NWdIUvpAhGcQYJPVrJmtG1Ste5jLYpdng6lZN5TdiKHiuUbZwr78%2F13nELBjC%2F4ScDa1%2F%2BnD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230321T051254Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFLAXK57H3%2F20230321%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c5787faf1385fc0276f5435077d7c032f8e66b3d6cb5f614bd565746f9ac215c",
            "width": 100,
            "height": 100
          },
          "SMALL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/680/680525794659eec4b5ba4ad54ef10cc5-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIAs2fBjkEzVJk%2F1OQPDuoVtuVTUf37KrveWp2TuWAiBVAiBCvepbr4JJ83VLpEB6YZIVap76705x9RDXOYrZ0BdctSrCBQiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMCiVZWBZi36dG3dthKpYFZ1wTVWuifefe5XCZYQM%2FtbQslxNRUQI4w75RB09guanYR%2B9pie0n73ewaiwpq3%2Bm5O3tBniA97kirAv6XLN%2BdgO44hktWFq1NbOYmwG%2FH4Go5nh9o8t0PkHThE1yzSWyLOeRUoPQ2lfz4qsC0Ucfv7DBjpVbRIfNhXqIYdMvTOxIqAzKMzHKbz1HgJiyEEA%2BGd4C73XpiWkpbzr1zmWFOEeYluiKICNkr4tNMYFfJlQXhqcv%2B%2B8CjhTU71Lx92nnHVwBiIqyv7%2B%2FoJDEquaOSEUOezsf26GbI9V1c8DVS%2ByJzZ11HC0AUzSCFUL1PLn7eP8tFbPCOK2ZRY2Tsa%2Bt%2BCSMgIOiQryktnvpnoxfzbgiNtuMbUe67AjDPGyTYLECMVZYcXXICTRxzYtptd%2Fr%2FHvDeNywwswjn%2FhRUwNg7PUFwwMyRGnA4kr03HnrUDJxQ8AJofufbzwRERizUCNGYwb%2BjZk22znMinKugwB9pHRVz0NcgiFZViBjrb47Sp3ZjtkYaKSZBMTRhcLMsQ2sWWMX0cbv0oljE1kcLtNi1dMfcntWSgJPFRgUFSUK0B5o%2Fut8EnrTKQNcZ9hXvxD%2F9kuehlT3Ppr1r%2Fl0KiHammildZMwn6B%2BXK%2FfoQyBfhdNQEeoo8lF2Mt592cgI2g3T8PxxbDFZqk17rmx6yVOnl8OSRxjZ506iXwnBBpFqMx%2FC5N8icHsswlz3dW%2FQfHwosAo9Gdy74nF7tW3fFeDiwwTty6KPl35c%2F0WwAw%2BP5qxWSF3Ltr8rF4l26LvrT4yw9JN7oBXxd%2B%2BG2i25QI0Li1NWB9jLg37%2BOSdtmpW34YHno82tSgwFI50SI96Z8jr%2BBZgT2hB%2FTXyrhEtMafGsiEWKRYggUMwzeHkoAY6sgFCHxNh5uMZ6WQKr7GdWZ9FQUMtWJseE1KE5mVeg2B5qiLWAIREupCMaHy5EuzSt23Q9OV9wV4mZn%2F2XFJwbnOya0hoMzA0pivIyuQwZjMW9DtN%2B5Gvct3u7ID%2Fc7U4VCYDA00K%2BSOuEPgTziUpFmqlwTuMmWXe%2BCQI2%2Bv6NWdIUvpAhGcQYJPVrJmtG1Ste5jLYpdng6lZN5TdiKHiuUbZwr78%2F13nELBjC%2F4ScDa1%2F%2BnD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230321T051254Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFLAXK57H3%2F20230321%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f13c5b70e4d26992318fa6f322065aed5e9acc7768470bb50173ee704e04d573",
            "width": 200,
            "height": 200
          },
          "REGULAR": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/680/680525794659eec4b5ba4ad54ef10cc5.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIAs2fBjkEzVJk%2F1OQPDuoVtuVTUf37KrveWp2TuWAiBVAiBCvepbr4JJ83VLpEB6YZIVap76705x9RDXOYrZ0BdctSrCBQiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMCiVZWBZi36dG3dthKpYFZ1wTVWuifefe5XCZYQM%2FtbQslxNRUQI4w75RB09guanYR%2B9pie0n73ewaiwpq3%2Bm5O3tBniA97kirAv6XLN%2BdgO44hktWFq1NbOYmwG%2FH4Go5nh9o8t0PkHThE1yzSWyLOeRUoPQ2lfz4qsC0Ucfv7DBjpVbRIfNhXqIYdMvTOxIqAzKMzHKbz1HgJiyEEA%2BGd4C73XpiWkpbzr1zmWFOEeYluiKICNkr4tNMYFfJlQXhqcv%2B%2B8CjhTU71Lx92nnHVwBiIqyv7%2B%2FoJDEquaOSEUOezsf26GbI9V1c8DVS%2ByJzZ11HC0AUzSCFUL1PLn7eP8tFbPCOK2ZRY2Tsa%2Bt%2BCSMgIOiQryktnvpnoxfzbgiNtuMbUe67AjDPGyTYLECMVZYcXXICTRxzYtptd%2Fr%2FHvDeNywwswjn%2FhRUwNg7PUFwwMyRGnA4kr03HnrUDJxQ8AJofufbzwRERizUCNGYwb%2BjZk22znMinKugwB9pHRVz0NcgiFZViBjrb47Sp3ZjtkYaKSZBMTRhcLMsQ2sWWMX0cbv0oljE1kcLtNi1dMfcntWSgJPFRgUFSUK0B5o%2Fut8EnrTKQNcZ9hXvxD%2F9kuehlT3Ppr1r%2Fl0KiHammildZMwn6B%2BXK%2FfoQyBfhdNQEeoo8lF2Mt592cgI2g3T8PxxbDFZqk17rmx6yVOnl8OSRxjZ506iXwnBBpFqMx%2FC5N8icHsswlz3dW%2FQfHwosAo9Gdy74nF7tW3fFeDiwwTty6KPl35c%2F0WwAw%2BP5qxWSF3Ltr8rF4l26LvrT4yw9JN7oBXxd%2B%2BG2i25QI0Li1NWB9jLg37%2BOSdtmpW34YHno82tSgwFI50SI96Z8jr%2BBZgT2hB%2FTXyrhEtMafGsiEWKRYggUMwzeHkoAY6sgFCHxNh5uMZ6WQKr7GdWZ9FQUMtWJseE1KE5mVeg2B5qiLWAIREupCMaHy5EuzSt23Q9OV9wV4mZn%2F2XFJwbnOya0hoMzA0pivIyuQwZjMW9DtN%2B5Gvct3u7ID%2Fc7U4VCYDA00K%2BSOuEPgTziUpFmqlwTuMmWXe%2BCQI2%2Bv6NWdIUvpAhGcQYJPVrJmtG1Ste5jLYpdng6lZN5TdiKHiuUbZwr78%2F13nELBjC%2F4ScDa1%2F%2BnD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230321T051254Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFLAXK57H3%2F20230321%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=dfbab4308eb06cc7d0b12738d51361d581a57f52fcd5370bb62c47239af972ff",
            "width": 300,
            "height": 300
          }
        },
        "source": "BBC Good Food",
        "url": "http://www.bbcgoodfood.com/recipes/sweet-potato-crisps",
        "shareAs": "http://www.edamam.com/recipe/sweet-potato-crisps-75dc8fffe73f4de140e53cc3c9f865f8/potato",
        "yield": 1,
        "dietLabels": [
          "Low-Sodium"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Low Potassium",
          "Kidney-Friendly",
          "Keto-Friendly",
          "Vegan",
          "Vegetarian",
          "Pescatarian",
          "Paleo",
          "Mediterranean",
          "DASH",
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "FODMAP-Free",
          "Kosher",
          "Immuno-Supportive"
        ],
        "cautions": [],
        "ingredientLines": [
          "¼ small sweet potato",
          "½ tbsp olive oil"
        ],
        "ingredients": [
          {
            "text": "¼ small sweet potato",
            "quantity": 0.25,
            "measure": "<unit>",
            "food": "sweet potato",
            "weight": 24.375,
            "foodCategory": "vegetables",
            "foodId": "food_bg68yf2b3dlfusawgs590bjloxfd",
            "image": "https://www.edamam.com/food-img/b66/b660e3d37b4ea9d58cb98e8ea73933b6.jpg"
          },
          {
            "text": "½ tbsp olive oil",
            "quantity": 0.5,
            "measure": "tablespoon",
            "food": "olive oil",
            "weight": 6.75,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          }
        ],
        "calories": 80.6325,
        "totalWeight": 31.125,
        "totalTime": 30,
        "cuisineType": [
          "south american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "desserts"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 80.6325,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 6.7621875,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 0.9364275000000001,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 4.9251112500000005,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 0.7137150000000001,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 4.90425,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 4.173,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 0.73125,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 1.018875,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 0.3826875,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 13.54125,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 7.38,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 6.09375,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 82.21124999999999,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 0.1864875,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 0.073125,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 11.456249999999999,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 172.81875,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 0.585,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.019012499999999998,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.01486875,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 0.13576875000000002,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.050943749999999996,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 2.68125,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 2.68125,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 1.032,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 4.50225,
            "unit": "µg"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 18.837,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 4.031624999999999,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 10.403365384615384,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 4.6821375000000005,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 1.6347500000000001,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 2.925,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 0.7653750000000001,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 0.56421875,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 0.738,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 1.4508928571428572,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 1.7491755319148936,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 1.0360416666666667,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 0.6647727272727273,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1.636607142857143,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 19.202083333333334,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 0.65,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 1.5843749999999999,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 1.1437499999999998,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 0.8485546875000002,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 3.9187499999999993,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 0.6703125,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 6.88,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 3.751875,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 6.7621875,
            "hasRDI": true,
            "daily": 10.403365384615384,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 0.9364275000000001,
                "hasRDI": true,
                "daily": 4.6821375000000005,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 4.9251112500000005,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 0.7137150000000001,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 4.90425,
            "hasRDI": true,
            "daily": 1.6347500000000001,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 4.173,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 0.73125,
                "hasRDI": true,
                "daily": 2.925,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 1.018875,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 0.3826875,
            "hasRDI": true,
            "daily": 0.7653750000000001,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 13.54125,
            "hasRDI": true,
            "daily": 0.56421875,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 7.38,
            "hasRDI": true,
            "daily": 0.738,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 6.09375,
            "hasRDI": true,
            "daily": 1.4508928571428572,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 82.21124999999999,
            "hasRDI": true,
            "daily": 1.7491755319148936,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 0.1864875,
            "hasRDI": true,
            "daily": 1.0360416666666667,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 0.073125,
            "hasRDI": true,
            "daily": 0.6647727272727273,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 11.456249999999999,
            "hasRDI": true,
            "daily": 1.636607142857143,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 172.81875,
            "hasRDI": true,
            "daily": 19.202083333333334,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 0.585,
            "hasRDI": true,
            "daily": 0.65,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 0.019012499999999998,
            "hasRDI": true,
            "daily": 1.5843749999999999,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 0.01486875,
            "hasRDI": true,
            "daily": 1.1437499999999998,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 0.13576875000000002,
            "hasRDI": true,
            "daily": 0.8485546875000002,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 0.050943749999999996,
            "hasRDI": true,
            "daily": 3.9187499999999993,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 2.68125,
            "hasRDI": true,
            "daily": 0.6703125,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 2.68125,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 1.032,
            "hasRDI": true,
            "daily": 6.88,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 4.50225,
            "hasRDI": true,
            "daily": 3.751875,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 18.837,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          }
        ]
      },
      "_links": {
        "self": {
          "title": "Self",
          "href": "https://api.edamam.com/api/recipes/v2/75dc8fffe73f4de140e53cc3c9f865f8?type=public&app_id=cc240aca&app_key=0a8c95e6cec1cf2d3976f987892f75d7"
        }
      }
    },
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_b6d5d8f93c9a9aa5619ce44789739c71",
        "label": "Sweet Potato Smoothie",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/aaf/aaf667d7997529ae03a6bd6e4fe2c5df.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIAs2fBjkEzVJk%2F1OQPDuoVtuVTUf37KrveWp2TuWAiBVAiBCvepbr4JJ83VLpEB6YZIVap76705x9RDXOYrZ0BdctSrCBQiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMCiVZWBZi36dG3dthKpYFZ1wTVWuifefe5XCZYQM%2FtbQslxNRUQI4w75RB09guanYR%2B9pie0n73ewaiwpq3%2Bm5O3tBniA97kirAv6XLN%2BdgO44hktWFq1NbOYmwG%2FH4Go5nh9o8t0PkHThE1yzSWyLOeRUoPQ2lfz4qsC0Ucfv7DBjpVbRIfNhXqIYdMvTOxIqAzKMzHKbz1HgJiyEEA%2BGd4C73XpiWkpbzr1zmWFOEeYluiKICNkr4tNMYFfJlQXhqcv%2B%2B8CjhTU71Lx92nnHVwBiIqyv7%2B%2FoJDEquaOSEUOezsf26GbI9V1c8DVS%2ByJzZ11HC0AUzSCFUL1PLn7eP8tFbPCOK2ZRY2Tsa%2Bt%2BCSMgIOiQryktnvpnoxfzbgiNtuMbUe67AjDPGyTYLECMVZYcXXICTRxzYtptd%2Fr%2FHvDeNywwswjn%2FhRUwNg7PUFwwMyRGnA4kr03HnrUDJxQ8AJofufbzwRERizUCNGYwb%2BjZk22znMinKugwB9pHRVz0NcgiFZViBjrb47Sp3ZjtkYaKSZBMTRhcLMsQ2sWWMX0cbv0oljE1kcLtNi1dMfcntWSgJPFRgUFSUK0B5o%2Fut8EnrTKQNcZ9hXvxD%2F9kuehlT3Ppr1r%2Fl0KiHammildZMwn6B%2BXK%2FfoQyBfhdNQEeoo8lF2Mt592cgI2g3T8PxxbDFZqk17rmx6yVOnl8OSRxjZ506iXwnBBpFqMx%2FC5N8icHsswlz3dW%2FQfHwosAo9Gdy74nF7tW3fFeDiwwTty6KPl35c%2F0WwAw%2BP5qxWSF3Ltr8rF4l26LvrT4yw9JN7oBXxd%2B%2BG2i25QI0Li1NWB9jLg37%2BOSdtmpW34YHno82tSgwFI50SI96Z8jr%2BBZgT2hB%2FTXyrhEtMafGsiEWKRYggUMwzeHkoAY6sgFCHxNh5uMZ6WQKr7GdWZ9FQUMtWJseE1KE5mVeg2B5qiLWAIREupCMaHy5EuzSt23Q9OV9wV4mZn%2F2XFJwbnOya0hoMzA0pivIyuQwZjMW9DtN%2B5Gvct3u7ID%2Fc7U4VCYDA00K%2BSOuEPgTziUpFmqlwTuMmWXe%2BCQI2%2Bv6NWdIUvpAhGcQYJPVrJmtG1Ste5jLYpdng6lZN5TdiKHiuUbZwr78%2F13nELBjC%2F4ScDa1%2F%2BnD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230321T051254Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFLAXK57H3%2F20230321%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=626baffec1223a5d94940967b94fed4d9455e14e05a1f48e8a653f643f9bb32f",
        "images": {
          "THUMBNAIL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/aaf/aaf667d7997529ae03a6bd6e4fe2c5df-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIAs2fBjkEzVJk%2F1OQPDuoVtuVTUf37KrveWp2TuWAiBVAiBCvepbr4JJ83VLpEB6YZIVap76705x9RDXOYrZ0BdctSrCBQiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMCiVZWBZi36dG3dthKpYFZ1wTVWuifefe5XCZYQM%2FtbQslxNRUQI4w75RB09guanYR%2B9pie0n73ewaiwpq3%2Bm5O3tBniA97kirAv6XLN%2BdgO44hktWFq1NbOYmwG%2FH4Go5nh9o8t0PkHThE1yzSWyLOeRUoPQ2lfz4qsC0Ucfv7DBjpVbRIfNhXqIYdMvTOxIqAzKMzHKbz1HgJiyEEA%2BGd4C73XpiWkpbzr1zmWFOEeYluiKICNkr4tNMYFfJlQXhqcv%2B%2B8CjhTU71Lx92nnHVwBiIqyv7%2B%2FoJDEquaOSEUOezsf26GbI9V1c8DVS%2ByJzZ11HC0AUzSCFUL1PLn7eP8tFbPCOK2ZRY2Tsa%2Bt%2BCSMgIOiQryktnvpnoxfzbgiNtuMbUe67AjDPGyTYLECMVZYcXXICTRxzYtptd%2Fr%2FHvDeNywwswjn%2FhRUwNg7PUFwwMyRGnA4kr03HnrUDJxQ8AJofufbzwRERizUCNGYwb%2BjZk22znMinKugwB9pHRVz0NcgiFZViBjrb47Sp3ZjtkYaKSZBMTRhcLMsQ2sWWMX0cbv0oljE1kcLtNi1dMfcntWSgJPFRgUFSUK0B5o%2Fut8EnrTKQNcZ9hXvxD%2F9kuehlT3Ppr1r%2Fl0KiHammildZMwn6B%2BXK%2FfoQyBfhdNQEeoo8lF2Mt592cgI2g3T8PxxbDFZqk17rmx6yVOnl8OSRxjZ506iXwnBBpFqMx%2FC5N8icHsswlz3dW%2FQfHwosAo9Gdy74nF7tW3fFeDiwwTty6KPl35c%2F0WwAw%2BP5qxWSF3Ltr8rF4l26LvrT4yw9JN7oBXxd%2B%2BG2i25QI0Li1NWB9jLg37%2BOSdtmpW34YHno82tSgwFI50SI96Z8jr%2BBZgT2hB%2FTXyrhEtMafGsiEWKRYggUMwzeHkoAY6sgFCHxNh5uMZ6WQKr7GdWZ9FQUMtWJseE1KE5mVeg2B5qiLWAIREupCMaHy5EuzSt23Q9OV9wV4mZn%2F2XFJwbnOya0hoMzA0pivIyuQwZjMW9DtN%2B5Gvct3u7ID%2Fc7U4VCYDA00K%2BSOuEPgTziUpFmqlwTuMmWXe%2BCQI2%2Bv6NWdIUvpAhGcQYJPVrJmtG1Ste5jLYpdng6lZN5TdiKHiuUbZwr78%2F13nELBjC%2F4ScDa1%2F%2BnD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230321T051254Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFLAXK57H3%2F20230321%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=803dfcdc7a084864d9d82047668e4ab70df362608c41a24cad3164f2c61a9369",
            "width": 100,
            "height": 100
          },
          "SMALL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/aaf/aaf667d7997529ae03a6bd6e4fe2c5df-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIAs2fBjkEzVJk%2F1OQPDuoVtuVTUf37KrveWp2TuWAiBVAiBCvepbr4JJ83VLpEB6YZIVap76705x9RDXOYrZ0BdctSrCBQiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMCiVZWBZi36dG3dthKpYFZ1wTVWuifefe5XCZYQM%2FtbQslxNRUQI4w75RB09guanYR%2B9pie0n73ewaiwpq3%2Bm5O3tBniA97kirAv6XLN%2BdgO44hktWFq1NbOYmwG%2FH4Go5nh9o8t0PkHThE1yzSWyLOeRUoPQ2lfz4qsC0Ucfv7DBjpVbRIfNhXqIYdMvTOxIqAzKMzHKbz1HgJiyEEA%2BGd4C73XpiWkpbzr1zmWFOEeYluiKICNkr4tNMYFfJlQXhqcv%2B%2B8CjhTU71Lx92nnHVwBiIqyv7%2B%2FoJDEquaOSEUOezsf26GbI9V1c8DVS%2ByJzZ11HC0AUzSCFUL1PLn7eP8tFbPCOK2ZRY2Tsa%2Bt%2BCSMgIOiQryktnvpnoxfzbgiNtuMbUe67AjDPGyTYLECMVZYcXXICTRxzYtptd%2Fr%2FHvDeNywwswjn%2FhRUwNg7PUFwwMyRGnA4kr03HnrUDJxQ8AJofufbzwRERizUCNGYwb%2BjZk22znMinKugwB9pHRVz0NcgiFZViBjrb47Sp3ZjtkYaKSZBMTRhcLMsQ2sWWMX0cbv0oljE1kcLtNi1dMfcntWSgJPFRgUFSUK0B5o%2Fut8EnrTKQNcZ9hXvxD%2F9kuehlT3Ppr1r%2Fl0KiHammildZMwn6B%2BXK%2FfoQyBfhdNQEeoo8lF2Mt592cgI2g3T8PxxbDFZqk17rmx6yVOnl8OSRxjZ506iXwnBBpFqMx%2FC5N8icHsswlz3dW%2FQfHwosAo9Gdy74nF7tW3fFeDiwwTty6KPl35c%2F0WwAw%2BP5qxWSF3Ltr8rF4l26LvrT4yw9JN7oBXxd%2B%2BG2i25QI0Li1NWB9jLg37%2BOSdtmpW34YHno82tSgwFI50SI96Z8jr%2BBZgT2hB%2FTXyrhEtMafGsiEWKRYggUMwzeHkoAY6sgFCHxNh5uMZ6WQKr7GdWZ9FQUMtWJseE1KE5mVeg2B5qiLWAIREupCMaHy5EuzSt23Q9OV9wV4mZn%2F2XFJwbnOya0hoMzA0pivIyuQwZjMW9DtN%2B5Gvct3u7ID%2Fc7U4VCYDA00K%2BSOuEPgTziUpFmqlwTuMmWXe%2BCQI2%2Bv6NWdIUvpAhGcQYJPVrJmtG1Ste5jLYpdng6lZN5TdiKHiuUbZwr78%2F13nELBjC%2F4ScDa1%2F%2BnD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230321T051254Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFLAXK57H3%2F20230321%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d20a4191ccf029daef2b56fb2eb20fc6804302ec15ccea7e1beec25e2064f687",
            "width": 200,
            "height": 200
          },
          "REGULAR": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/aaf/aaf667d7997529ae03a6bd6e4fe2c5df.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIAs2fBjkEzVJk%2F1OQPDuoVtuVTUf37KrveWp2TuWAiBVAiBCvepbr4JJ83VLpEB6YZIVap76705x9RDXOYrZ0BdctSrCBQiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMCiVZWBZi36dG3dthKpYFZ1wTVWuifefe5XCZYQM%2FtbQslxNRUQI4w75RB09guanYR%2B9pie0n73ewaiwpq3%2Bm5O3tBniA97kirAv6XLN%2BdgO44hktWFq1NbOYmwG%2FH4Go5nh9o8t0PkHThE1yzSWyLOeRUoPQ2lfz4qsC0Ucfv7DBjpVbRIfNhXqIYdMvTOxIqAzKMzHKbz1HgJiyEEA%2BGd4C73XpiWkpbzr1zmWFOEeYluiKICNkr4tNMYFfJlQXhqcv%2B%2B8CjhTU71Lx92nnHVwBiIqyv7%2B%2FoJDEquaOSEUOezsf26GbI9V1c8DVS%2ByJzZ11HC0AUzSCFUL1PLn7eP8tFbPCOK2ZRY2Tsa%2Bt%2BCSMgIOiQryktnvpnoxfzbgiNtuMbUe67AjDPGyTYLECMVZYcXXICTRxzYtptd%2Fr%2FHvDeNywwswjn%2FhRUwNg7PUFwwMyRGnA4kr03HnrUDJxQ8AJofufbzwRERizUCNGYwb%2BjZk22znMinKugwB9pHRVz0NcgiFZViBjrb47Sp3ZjtkYaKSZBMTRhcLMsQ2sWWMX0cbv0oljE1kcLtNi1dMfcntWSgJPFRgUFSUK0B5o%2Fut8EnrTKQNcZ9hXvxD%2F9kuehlT3Ppr1r%2Fl0KiHammildZMwn6B%2BXK%2FfoQyBfhdNQEeoo8lF2Mt592cgI2g3T8PxxbDFZqk17rmx6yVOnl8OSRxjZ506iXwnBBpFqMx%2FC5N8icHsswlz3dW%2FQfHwosAo9Gdy74nF7tW3fFeDiwwTty6KPl35c%2F0WwAw%2BP5qxWSF3Ltr8rF4l26LvrT4yw9JN7oBXxd%2B%2BG2i25QI0Li1NWB9jLg37%2BOSdtmpW34YHno82tSgwFI50SI96Z8jr%2BBZgT2hB%2FTXyrhEtMafGsiEWKRYggUMwzeHkoAY6sgFCHxNh5uMZ6WQKr7GdWZ9FQUMtWJseE1KE5mVeg2B5qiLWAIREupCMaHy5EuzSt23Q9OV9wV4mZn%2F2XFJwbnOya0hoMzA0pivIyuQwZjMW9DtN%2B5Gvct3u7ID%2Fc7U4VCYDA00K%2BSOuEPgTziUpFmqlwTuMmWXe%2BCQI2%2Bv6NWdIUvpAhGcQYJPVrJmtG1Ste5jLYpdng6lZN5TdiKHiuUbZwr78%2F13nELBjC%2F4ScDa1%2F%2BnD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230321T051254Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFLAXK57H3%2F20230321%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=626baffec1223a5d94940967b94fed4d9455e14e05a1f48e8a653f643f9bb32f",
            "width": 300,
            "height": 300
          },
          "LARGE": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/aaf/aaf667d7997529ae03a6bd6e4fe2c5df-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIAs2fBjkEzVJk%2F1OQPDuoVtuVTUf37KrveWp2TuWAiBVAiBCvepbr4JJ83VLpEB6YZIVap76705x9RDXOYrZ0BdctSrCBQiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMCiVZWBZi36dG3dthKpYFZ1wTVWuifefe5XCZYQM%2FtbQslxNRUQI4w75RB09guanYR%2B9pie0n73ewaiwpq3%2Bm5O3tBniA97kirAv6XLN%2BdgO44hktWFq1NbOYmwG%2FH4Go5nh9o8t0PkHThE1yzSWyLOeRUoPQ2lfz4qsC0Ucfv7DBjpVbRIfNhXqIYdMvTOxIqAzKMzHKbz1HgJiyEEA%2BGd4C73XpiWkpbzr1zmWFOEeYluiKICNkr4tNMYFfJlQXhqcv%2B%2B8CjhTU71Lx92nnHVwBiIqyv7%2B%2FoJDEquaOSEUOezsf26GbI9V1c8DVS%2ByJzZ11HC0AUzSCFUL1PLn7eP8tFbPCOK2ZRY2Tsa%2Bt%2BCSMgIOiQryktnvpnoxfzbgiNtuMbUe67AjDPGyTYLECMVZYcXXICTRxzYtptd%2Fr%2FHvDeNywwswjn%2FhRUwNg7PUFwwMyRGnA4kr03HnrUDJxQ8AJofufbzwRERizUCNGYwb%2BjZk22znMinKugwB9pHRVz0NcgiFZViBjrb47Sp3ZjtkYaKSZBMTRhcLMsQ2sWWMX0cbv0oljE1kcLtNi1dMfcntWSgJPFRgUFSUK0B5o%2Fut8EnrTKQNcZ9hXvxD%2F9kuehlT3Ppr1r%2Fl0KiHammildZMwn6B%2BXK%2FfoQyBfhdNQEeoo8lF2Mt592cgI2g3T8PxxbDFZqk17rmx6yVOnl8OSRxjZ506iXwnBBpFqMx%2FC5N8icHsswlz3dW%2FQfHwosAo9Gdy74nF7tW3fFeDiwwTty6KPl35c%2F0WwAw%2BP5qxWSF3Ltr8rF4l26LvrT4yw9JN7oBXxd%2B%2BG2i25QI0Li1NWB9jLg37%2BOSdtmpW34YHno82tSgwFI50SI96Z8jr%2BBZgT2hB%2FTXyrhEtMafGsiEWKRYggUMwzeHkoAY6sgFCHxNh5uMZ6WQKr7GdWZ9FQUMtWJseE1KE5mVeg2B5qiLWAIREupCMaHy5EuzSt23Q9OV9wV4mZn%2F2XFJwbnOya0hoMzA0pivIyuQwZjMW9DtN%2B5Gvct3u7ID%2Fc7U4VCYDA00K%2BSOuEPgTziUpFmqlwTuMmWXe%2BCQI2%2Bv6NWdIUvpAhGcQYJPVrJmtG1Ste5jLYpdng6lZN5TdiKHiuUbZwr78%2F13nELBjC%2F4ScDa1%2F%2BnD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230321T051254Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFLAXK57H3%2F20230321%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9f4ecbd21a5e0d78ad76028a8d75fe37dd4f26a6f6a85a518297b17d91d41188",
            "width": 600,
            "height": 600
          }
        },
        "source": "Food52",
        "url": "https://food52.com/recipes/55110-sweet-potato-smoothie",
        "shareAs": "http://www.edamam.com/recipe/sweet-potato-smoothie-b6d5d8f93c9a9aa5619ce44789739c71/potato",
        "yield": 1,
        "dietLabels": [
          "High-Fiber",
          "Low-Fat"
        ],
        "healthLabels": [
          "Vegan",
          "Vegetarian",
          "Pescatarian",
          "Paleo",
          "Mediterranean",
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "No oil added",
          "Sulfite-Free",
          "FODMAP-Free",
          "Kosher",
          "Immuno-Supportive"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 Sweet Potato (for smoothie - 1/4 cup sweet potato, cooked)",
          "1 Banana",
          "1 cup Ice",
          "1 cup Almond Milk",
          "1/2 teaspoon Cinnamon"
        ],
        "ingredients": [
          {
            "text": "1 Sweet Potato (for smoothie - 1/4 cup sweet potato, cooked)",
            "quantity": 1,
            "measure": "<unit>",
            "food": "Sweet Potato",
            "weight": 130,
            "foodCategory": "vegetables",
            "foodId": "food_bg68yf2b3dlfusawgs590bjloxfd",
            "image": "https://www.edamam.com/food-img/b66/b660e3d37b4ea9d58cb98e8ea73933b6.jpg"
          },
          {
            "text": "1 Banana",
            "quantity": 1,
            "measure": "<unit>",
            "food": "Banana",
            "weight": 115.7,
            "foodCategory": "fruit",
            "foodId": "food_bjsfxtcaidvmhaa3afrbna43q3hu",
            "image": "https://www.edamam.com/food-img/9f6/9f6181163a25c96022ee3fc66d9ebb11.jpg"
          },
          {
            "text": "1 cup Ice",
            "quantity": 1,
            "measure": "cup",
            "food": "Ice",
            "weight": 237,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          },
          {
            "text": "1 cup Almond Milk",
            "quantity": 1,
            "measure": "cup",
            "food": "Almond Milk",
            "weight": 240,
            "foodCategory": "Vegan products",
            "foodId": "food_aa8o4pkbhgkey4btmg1daaclqmww",
            "image": "https://www.edamam.com/food-img/b26/b267bf598feaabd7349fddda7a481f00.jpg"
          },
          {
            "text": "1/2 teaspoon Cinnamon",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "Cinnamon",
            "weight": 1.3,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_atjxtznauw5zabaixm24xa787onz",
            "image": "https://www.edamam.com/food-img/d4d/d4daa18b92c596a1c99c08537c38e65b.jpg"
          }
        ],
        "calories": 253.984,
        "totalWeight": 724,
        "totalTime": 0,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "breakfast",
          "lunch/dinner"
        ],
        "dishType": [
          "drinks"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 253.984,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 3.10293,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 0.9969505999999999,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.003312,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 7.007982800000001,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 2.8257882,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 56.38955,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 47.39905,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 8.9905,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 19.612320000000004,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 4.7700000000000005,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 252.667,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 537.7209999999999,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 83.68900000000001,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 1018.709,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 2.0419799999999997,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 0.7790400000000001,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 193.5908,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 925.3660000000001,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 13.2353,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.281553,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.277094,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 1.6908210000000001,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.734373,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 47.2332,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 47.2332,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 6.142964,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 3.3241000000000005,
            "unit": "µg"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 652.03541,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 12.699200000000001,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 4.7737384615384615,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 4.9847529999999995,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 18.796516666666665,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 35.962,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 9.540000000000001,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 10.527791666666667,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 53.772099999999995,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 19.925952380952385,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 21.674659574468084,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 11.344333333333331,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 7.0821818181818195,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 27.655828571428575,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 102.81844444444445,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 14.70588888888889,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 23.46275,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 21.314923076923076,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 10.567631250000002,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 56.49023076923077,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 11.8083,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 40.953093333333335,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 2.7700833333333335,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 3.10293,
            "hasRDI": true,
            "daily": 4.7737384615384615,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 0.9969505999999999,
                "hasRDI": true,
                "daily": 4.9847529999999995,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 0.003312,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 7.007982800000001,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 2.8257882,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 56.38955,
            "hasRDI": true,
            "daily": 18.796516666666665,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 47.39905,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 8.9905,
                "hasRDI": true,
                "daily": 35.962,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 19.612320000000004,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 4.7700000000000005,
            "hasRDI": true,
            "daily": 9.540000000000001,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 252.667,
            "hasRDI": true,
            "daily": 10.527791666666667,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 537.7209999999999,
            "hasRDI": true,
            "daily": 53.772099999999995,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 83.68900000000001,
            "hasRDI": true,
            "daily": 19.925952380952385,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 1018.709,
            "hasRDI": true,
            "daily": 21.674659574468084,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 2.0419799999999997,
            "hasRDI": true,
            "daily": 11.344333333333331,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 0.7790400000000001,
            "hasRDI": true,
            "daily": 7.0821818181818195,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 193.5908,
            "hasRDI": true,
            "daily": 27.655828571428575,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 925.3660000000001,
            "hasRDI": true,
            "daily": 102.81844444444445,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 13.2353,
            "hasRDI": true,
            "daily": 14.70588888888889,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 0.281553,
            "hasRDI": true,
            "daily": 23.46275,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 0.277094,
            "hasRDI": true,
            "daily": 21.314923076923076,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 1.6908210000000001,
            "hasRDI": true,
            "daily": 10.567631250000002,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 0.734373,
            "hasRDI": true,
            "daily": 56.49023076923077,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 47.2332,
            "hasRDI": true,
            "daily": 11.8083,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 47.2332,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 6.142964,
            "hasRDI": true,
            "daily": 40.953093333333335,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 3.3241000000000005,
            "hasRDI": true,
            "daily": 2.7700833333333335,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 652.03541,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          }
        ]
      },
      "_links": {
        "self": {
          "title": "Self",
          "href": "https://api.edamam.com/api/recipes/v2/b6d5d8f93c9a9aa5619ce44789739c71?type=public&app_id=cc240aca&app_key=0a8c95e6cec1cf2d3976f987892f75d7"
        }
      }
    },
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_618ebc4f7b639347544f6be6e358373d",
        "label": "Crisp Potato Galettes",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/4dc/4dc232846cf15a9fe3f9a91ccec63b87.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIAs2fBjkEzVJk%2F1OQPDuoVtuVTUf37KrveWp2TuWAiBVAiBCvepbr4JJ83VLpEB6YZIVap76705x9RDXOYrZ0BdctSrCBQiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMCiVZWBZi36dG3dthKpYFZ1wTVWuifefe5XCZYQM%2FtbQslxNRUQI4w75RB09guanYR%2B9pie0n73ewaiwpq3%2Bm5O3tBniA97kirAv6XLN%2BdgO44hktWFq1NbOYmwG%2FH4Go5nh9o8t0PkHThE1yzSWyLOeRUoPQ2lfz4qsC0Ucfv7DBjpVbRIfNhXqIYdMvTOxIqAzKMzHKbz1HgJiyEEA%2BGd4C73XpiWkpbzr1zmWFOEeYluiKICNkr4tNMYFfJlQXhqcv%2B%2B8CjhTU71Lx92nnHVwBiIqyv7%2B%2FoJDEquaOSEUOezsf26GbI9V1c8DVS%2ByJzZ11HC0AUzSCFUL1PLn7eP8tFbPCOK2ZRY2Tsa%2Bt%2BCSMgIOiQryktnvpnoxfzbgiNtuMbUe67AjDPGyTYLECMVZYcXXICTRxzYtptd%2Fr%2FHvDeNywwswjn%2FhRUwNg7PUFwwMyRGnA4kr03HnrUDJxQ8AJofufbzwRERizUCNGYwb%2BjZk22znMinKugwB9pHRVz0NcgiFZViBjrb47Sp3ZjtkYaKSZBMTRhcLMsQ2sWWMX0cbv0oljE1kcLtNi1dMfcntWSgJPFRgUFSUK0B5o%2Fut8EnrTKQNcZ9hXvxD%2F9kuehlT3Ppr1r%2Fl0KiHammildZMwn6B%2BXK%2FfoQyBfhdNQEeoo8lF2Mt592cgI2g3T8PxxbDFZqk17rmx6yVOnl8OSRxjZ506iXwnBBpFqMx%2FC5N8icHsswlz3dW%2FQfHwosAo9Gdy74nF7tW3fFeDiwwTty6KPl35c%2F0WwAw%2BP5qxWSF3Ltr8rF4l26LvrT4yw9JN7oBXxd%2B%2BG2i25QI0Li1NWB9jLg37%2BOSdtmpW34YHno82tSgwFI50SI96Z8jr%2BBZgT2hB%2FTXyrhEtMafGsiEWKRYggUMwzeHkoAY6sgFCHxNh5uMZ6WQKr7GdWZ9FQUMtWJseE1KE5mVeg2B5qiLWAIREupCMaHy5EuzSt23Q9OV9wV4mZn%2F2XFJwbnOya0hoMzA0pivIyuQwZjMW9DtN%2B5Gvct3u7ID%2Fc7U4VCYDA00K%2BSOuEPgTziUpFmqlwTuMmWXe%2BCQI2%2Bv6NWdIUvpAhGcQYJPVrJmtG1Ste5jLYpdng6lZN5TdiKHiuUbZwr78%2F13nELBjC%2F4ScDa1%2F%2BnD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230321T051254Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFLAXK57H3%2F20230321%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ed6e0f737c04f816c837dfecd21c242a3bd8365e910827eec80fa2b37a992173",
        "images": {
          "THUMBNAIL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/4dc/4dc232846cf15a9fe3f9a91ccec63b87-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIAs2fBjkEzVJk%2F1OQPDuoVtuVTUf37KrveWp2TuWAiBVAiBCvepbr4JJ83VLpEB6YZIVap76705x9RDXOYrZ0BdctSrCBQiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMCiVZWBZi36dG3dthKpYFZ1wTVWuifefe5XCZYQM%2FtbQslxNRUQI4w75RB09guanYR%2B9pie0n73ewaiwpq3%2Bm5O3tBniA97kirAv6XLN%2BdgO44hktWFq1NbOYmwG%2FH4Go5nh9o8t0PkHThE1yzSWyLOeRUoPQ2lfz4qsC0Ucfv7DBjpVbRIfNhXqIYdMvTOxIqAzKMzHKbz1HgJiyEEA%2BGd4C73XpiWkpbzr1zmWFOEeYluiKICNkr4tNMYFfJlQXhqcv%2B%2B8CjhTU71Lx92nnHVwBiIqyv7%2B%2FoJDEquaOSEUOezsf26GbI9V1c8DVS%2ByJzZ11HC0AUzSCFUL1PLn7eP8tFbPCOK2ZRY2Tsa%2Bt%2BCSMgIOiQryktnvpnoxfzbgiNtuMbUe67AjDPGyTYLECMVZYcXXICTRxzYtptd%2Fr%2FHvDeNywwswjn%2FhRUwNg7PUFwwMyRGnA4kr03HnrUDJxQ8AJofufbzwRERizUCNGYwb%2BjZk22znMinKugwB9pHRVz0NcgiFZViBjrb47Sp3ZjtkYaKSZBMTRhcLMsQ2sWWMX0cbv0oljE1kcLtNi1dMfcntWSgJPFRgUFSUK0B5o%2Fut8EnrTKQNcZ9hXvxD%2F9kuehlT3Ppr1r%2Fl0KiHammildZMwn6B%2BXK%2FfoQyBfhdNQEeoo8lF2Mt592cgI2g3T8PxxbDFZqk17rmx6yVOnl8OSRxjZ506iXwnBBpFqMx%2FC5N8icHsswlz3dW%2FQfHwosAo9Gdy74nF7tW3fFeDiwwTty6KPl35c%2F0WwAw%2BP5qxWSF3Ltr8rF4l26LvrT4yw9JN7oBXxd%2B%2BG2i25QI0Li1NWB9jLg37%2BOSdtmpW34YHno82tSgwFI50SI96Z8jr%2BBZgT2hB%2FTXyrhEtMafGsiEWKRYggUMwzeHkoAY6sgFCHxNh5uMZ6WQKr7GdWZ9FQUMtWJseE1KE5mVeg2B5qiLWAIREupCMaHy5EuzSt23Q9OV9wV4mZn%2F2XFJwbnOya0hoMzA0pivIyuQwZjMW9DtN%2B5Gvct3u7ID%2Fc7U4VCYDA00K%2BSOuEPgTziUpFmqlwTuMmWXe%2BCQI2%2Bv6NWdIUvpAhGcQYJPVrJmtG1Ste5jLYpdng6lZN5TdiKHiuUbZwr78%2F13nELBjC%2F4ScDa1%2F%2BnD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230321T051254Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFLAXK57H3%2F20230321%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=463238cf31e1d31e7580a8fd5fc09792d322fb949cc1c10e7b6a53bca51e51fe",
            "width": 100,
            "height": 100
          },
          "SMALL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/4dc/4dc232846cf15a9fe3f9a91ccec63b87-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIAs2fBjkEzVJk%2F1OQPDuoVtuVTUf37KrveWp2TuWAiBVAiBCvepbr4JJ83VLpEB6YZIVap76705x9RDXOYrZ0BdctSrCBQiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMCiVZWBZi36dG3dthKpYFZ1wTVWuifefe5XCZYQM%2FtbQslxNRUQI4w75RB09guanYR%2B9pie0n73ewaiwpq3%2Bm5O3tBniA97kirAv6XLN%2BdgO44hktWFq1NbOYmwG%2FH4Go5nh9o8t0PkHThE1yzSWyLOeRUoPQ2lfz4qsC0Ucfv7DBjpVbRIfNhXqIYdMvTOxIqAzKMzHKbz1HgJiyEEA%2BGd4C73XpiWkpbzr1zmWFOEeYluiKICNkr4tNMYFfJlQXhqcv%2B%2B8CjhTU71Lx92nnHVwBiIqyv7%2B%2FoJDEquaOSEUOezsf26GbI9V1c8DVS%2ByJzZ11HC0AUzSCFUL1PLn7eP8tFbPCOK2ZRY2Tsa%2Bt%2BCSMgIOiQryktnvpnoxfzbgiNtuMbUe67AjDPGyTYLECMVZYcXXICTRxzYtptd%2Fr%2FHvDeNywwswjn%2FhRUwNg7PUFwwMyRGnA4kr03HnrUDJxQ8AJofufbzwRERizUCNGYwb%2BjZk22znMinKugwB9pHRVz0NcgiFZViBjrb47Sp3ZjtkYaKSZBMTRhcLMsQ2sWWMX0cbv0oljE1kcLtNi1dMfcntWSgJPFRgUFSUK0B5o%2Fut8EnrTKQNcZ9hXvxD%2F9kuehlT3Ppr1r%2Fl0KiHammildZMwn6B%2BXK%2FfoQyBfhdNQEeoo8lF2Mt592cgI2g3T8PxxbDFZqk17rmx6yVOnl8OSRxjZ506iXwnBBpFqMx%2FC5N8icHsswlz3dW%2FQfHwosAo9Gdy74nF7tW3fFeDiwwTty6KPl35c%2F0WwAw%2BP5qxWSF3Ltr8rF4l26LvrT4yw9JN7oBXxd%2B%2BG2i25QI0Li1NWB9jLg37%2BOSdtmpW34YHno82tSgwFI50SI96Z8jr%2BBZgT2hB%2FTXyrhEtMafGsiEWKRYggUMwzeHkoAY6sgFCHxNh5uMZ6WQKr7GdWZ9FQUMtWJseE1KE5mVeg2B5qiLWAIREupCMaHy5EuzSt23Q9OV9wV4mZn%2F2XFJwbnOya0hoMzA0pivIyuQwZjMW9DtN%2B5Gvct3u7ID%2Fc7U4VCYDA00K%2BSOuEPgTziUpFmqlwTuMmWXe%2BCQI2%2Bv6NWdIUvpAhGcQYJPVrJmtG1Ste5jLYpdng6lZN5TdiKHiuUbZwr78%2F13nELBjC%2F4ScDa1%2F%2BnD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230321T051254Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFLAXK57H3%2F20230321%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1b24a23278c4cec6f215af0e884e3ae65cb3451c5a5d83466336611baf06baa9",
            "width": 200,
            "height": 200
          },
          "REGULAR": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/4dc/4dc232846cf15a9fe3f9a91ccec63b87.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIAs2fBjkEzVJk%2F1OQPDuoVtuVTUf37KrveWp2TuWAiBVAiBCvepbr4JJ83VLpEB6YZIVap76705x9RDXOYrZ0BdctSrCBQiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMCiVZWBZi36dG3dthKpYFZ1wTVWuifefe5XCZYQM%2FtbQslxNRUQI4w75RB09guanYR%2B9pie0n73ewaiwpq3%2Bm5O3tBniA97kirAv6XLN%2BdgO44hktWFq1NbOYmwG%2FH4Go5nh9o8t0PkHThE1yzSWyLOeRUoPQ2lfz4qsC0Ucfv7DBjpVbRIfNhXqIYdMvTOxIqAzKMzHKbz1HgJiyEEA%2BGd4C73XpiWkpbzr1zmWFOEeYluiKICNkr4tNMYFfJlQXhqcv%2B%2B8CjhTU71Lx92nnHVwBiIqyv7%2B%2FoJDEquaOSEUOezsf26GbI9V1c8DVS%2ByJzZ11HC0AUzSCFUL1PLn7eP8tFbPCOK2ZRY2Tsa%2Bt%2BCSMgIOiQryktnvpnoxfzbgiNtuMbUe67AjDPGyTYLECMVZYcXXICTRxzYtptd%2Fr%2FHvDeNywwswjn%2FhRUwNg7PUFwwMyRGnA4kr03HnrUDJxQ8AJofufbzwRERizUCNGYwb%2BjZk22znMinKugwB9pHRVz0NcgiFZViBjrb47Sp3ZjtkYaKSZBMTRhcLMsQ2sWWMX0cbv0oljE1kcLtNi1dMfcntWSgJPFRgUFSUK0B5o%2Fut8EnrTKQNcZ9hXvxD%2F9kuehlT3Ppr1r%2Fl0KiHammildZMwn6B%2BXK%2FfoQyBfhdNQEeoo8lF2Mt592cgI2g3T8PxxbDFZqk17rmx6yVOnl8OSRxjZ506iXwnBBpFqMx%2FC5N8icHsswlz3dW%2FQfHwosAo9Gdy74nF7tW3fFeDiwwTty6KPl35c%2F0WwAw%2BP5qxWSF3Ltr8rF4l26LvrT4yw9JN7oBXxd%2B%2BG2i25QI0Li1NWB9jLg37%2BOSdtmpW34YHno82tSgwFI50SI96Z8jr%2BBZgT2hB%2FTXyrhEtMafGsiEWKRYggUMwzeHkoAY6sgFCHxNh5uMZ6WQKr7GdWZ9FQUMtWJseE1KE5mVeg2B5qiLWAIREupCMaHy5EuzSt23Q9OV9wV4mZn%2F2XFJwbnOya0hoMzA0pivIyuQwZjMW9DtN%2B5Gvct3u7ID%2Fc7U4VCYDA00K%2BSOuEPgTziUpFmqlwTuMmWXe%2BCQI2%2Bv6NWdIUvpAhGcQYJPVrJmtG1Ste5jLYpdng6lZN5TdiKHiuUbZwr78%2F13nELBjC%2F4ScDa1%2F%2BnD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230321T051254Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFLAXK57H3%2F20230321%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ed6e0f737c04f816c837dfecd21c242a3bd8365e910827eec80fa2b37a992173",
            "width": 300,
            "height": 300
          }
        },
        "source": "Epicurious",
        "url": "https://www.epicurious.com/recipes/food/views/crisp-potato-galettes-102282",
        "shareAs": "http://www.edamam.com/recipe/crisp-potato-galettes-618ebc4f7b639347544f6be6e358373d/potato",
        "yield": 2,
        "dietLabels": [
          "Low-Sodium"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Vegan",
          "Vegetarian",
          "Pescatarian",
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "FODMAP-Free",
          "Kosher",
          "Immuno-Supportive"
        ],
        "cautions": [],
        "ingredientLines": [
          "Olive-oil cooking spray",
          "1 (8-ounce) russet (baking) potato"
        ],
        "ingredients": [
          {
            "text": "Olive-oil cooking spray",
            "quantity": 1,
            "measure": "spray",
            "food": "Olive-oil",
            "weight": 4.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "1 (8-ounce) russet (baking) potato",
            "quantity": 8,
            "measure": "ounce",
            "food": "potato",
            "weight": 226.796185,
            "foodCategory": "vegetables",
            "foodId": "food_abiw5baauresjmb6xpap2bg3otzu",
            "image": "https://www.edamam.com/food-img/651/6512e82417bce15c2899630c1a2799df.jpg"
          }
        ],
        "calories": 170.7547968375,
        "totalWeight": 231.296185,
        "totalTime": 0,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 170.7547968375,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 4.653087424875,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 0.6655852560750001,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 3.286646942775,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 0.5466767696625,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 29.715970139625,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 25.973833087125,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 3.7421370525000004,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 1.32675768225,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 3.4359622027500003,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 10.295828325,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 20.456656650000003,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 39.122341912500005,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 716.1539541375,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 1.3519576822500001,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 0.493281702375,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 96.9553690875,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 0,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 33.50913633375,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.13607771100000002,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.0544310844,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 1.7928238424250003,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.5017865593125,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 27.2155422,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 27.2155422,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 0.662759713875,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 5.94084563625,
            "unit": "µg"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 134.95506988425,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 8.537739841875,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 7.158596038269231,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 3.3279262803750003,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 9.905323379875,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 14.968548210000002,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 6.8719244055,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 0.428992846875,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 2.045665665,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 9.3148433125,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 15.237318173138297,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 7.510876012500002,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 4.4843791125,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 13.8507670125,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 0,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 37.23237370416666,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 11.339809250000002,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 4.187006492307693,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 11.205149015156252,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 38.59896610096154,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 6.80388555,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 4.4183980924999995,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 4.9507046968749995,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 4.653087424875,
            "hasRDI": true,
            "daily": 7.158596038269231,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 0.6655852560750001,
                "hasRDI": true,
                "daily": 3.3279262803750003,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 3.286646942775,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 0.5466767696625,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 29.715970139625,
            "hasRDI": true,
            "daily": 9.905323379875,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 25.973833087125,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 3.7421370525000004,
                "hasRDI": true,
                "daily": 14.968548210000002,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 1.32675768225,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 3.4359622027500003,
            "hasRDI": true,
            "daily": 6.8719244055,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 10.295828325,
            "hasRDI": true,
            "daily": 0.428992846875,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 20.456656650000003,
            "hasRDI": true,
            "daily": 2.045665665,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 39.122341912500005,
            "hasRDI": true,
            "daily": 9.3148433125,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 716.1539541375,
            "hasRDI": true,
            "daily": 15.237318173138297,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 1.3519576822500001,
            "hasRDI": true,
            "daily": 7.510876012500002,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 0.493281702375,
            "hasRDI": true,
            "daily": 4.4843791125,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 96.9553690875,
            "hasRDI": true,
            "daily": 13.8507670125,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 33.50913633375,
            "hasRDI": true,
            "daily": 37.23237370416666,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 0.13607771100000002,
            "hasRDI": true,
            "daily": 11.339809250000002,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 0.0544310844,
            "hasRDI": true,
            "daily": 4.187006492307693,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 1.7928238424250003,
            "hasRDI": true,
            "daily": 11.205149015156252,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 0.5017865593125,
            "hasRDI": true,
            "daily": 38.59896610096154,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 27.2155422,
            "hasRDI": true,
            "daily": 6.80388555,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 27.2155422,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 0.662759713875,
            "hasRDI": true,
            "daily": 4.4183980924999995,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 5.94084563625,
            "hasRDI": true,
            "daily": 4.9507046968749995,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 134.95506988425,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          }
        ]
      },
      "_links": {
        "self": {
          "title": "Self",
          "href": "https://api.edamam.com/api/recipes/v2/618ebc4f7b639347544f6be6e358373d?type=public&app_id=cc240aca&app_key=0a8c95e6cec1cf2d3976f987892f75d7"
        }
      }
    },
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_feada59ee17c28712fd23c37a2457387",
        "label": "Potato Kugel recipes",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/384/3843c8dec3dcbabaa0d90070e735cfba?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIAs2fBjkEzVJk%2F1OQPDuoVtuVTUf37KrveWp2TuWAiBVAiBCvepbr4JJ83VLpEB6YZIVap76705x9RDXOYrZ0BdctSrCBQiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMCiVZWBZi36dG3dthKpYFZ1wTVWuifefe5XCZYQM%2FtbQslxNRUQI4w75RB09guanYR%2B9pie0n73ewaiwpq3%2Bm5O3tBniA97kirAv6XLN%2BdgO44hktWFq1NbOYmwG%2FH4Go5nh9o8t0PkHThE1yzSWyLOeRUoPQ2lfz4qsC0Ucfv7DBjpVbRIfNhXqIYdMvTOxIqAzKMzHKbz1HgJiyEEA%2BGd4C73XpiWkpbzr1zmWFOEeYluiKICNkr4tNMYFfJlQXhqcv%2B%2B8CjhTU71Lx92nnHVwBiIqyv7%2B%2FoJDEquaOSEUOezsf26GbI9V1c8DVS%2ByJzZ11HC0AUzSCFUL1PLn7eP8tFbPCOK2ZRY2Tsa%2Bt%2BCSMgIOiQryktnvpnoxfzbgiNtuMbUe67AjDPGyTYLECMVZYcXXICTRxzYtptd%2Fr%2FHvDeNywwswjn%2FhRUwNg7PUFwwMyRGnA4kr03HnrUDJxQ8AJofufbzwRERizUCNGYwb%2BjZk22znMinKugwB9pHRVz0NcgiFZViBjrb47Sp3ZjtkYaKSZBMTRhcLMsQ2sWWMX0cbv0oljE1kcLtNi1dMfcntWSgJPFRgUFSUK0B5o%2Fut8EnrTKQNcZ9hXvxD%2F9kuehlT3Ppr1r%2Fl0KiHammildZMwn6B%2BXK%2FfoQyBfhdNQEeoo8lF2Mt592cgI2g3T8PxxbDFZqk17rmx6yVOnl8OSRxjZ506iXwnBBpFqMx%2FC5N8icHsswlz3dW%2FQfHwosAo9Gdy74nF7tW3fFeDiwwTty6KPl35c%2F0WwAw%2BP5qxWSF3Ltr8rF4l26LvrT4yw9JN7oBXxd%2B%2BG2i25QI0Li1NWB9jLg37%2BOSdtmpW34YHno82tSgwFI50SI96Z8jr%2BBZgT2hB%2FTXyrhEtMafGsiEWKRYggUMwzeHkoAY6sgFCHxNh5uMZ6WQKr7GdWZ9FQUMtWJseE1KE5mVeg2B5qiLWAIREupCMaHy5EuzSt23Q9OV9wV4mZn%2F2XFJwbnOya0hoMzA0pivIyuQwZjMW9DtN%2B5Gvct3u7ID%2Fc7U4VCYDA00K%2BSOuEPgTziUpFmqlwTuMmWXe%2BCQI2%2Bv6NWdIUvpAhGcQYJPVrJmtG1Ste5jLYpdng6lZN5TdiKHiuUbZwr78%2F13nELBjC%2F4ScDa1%2F%2BnD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230321T051254Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFLAXK57H3%2F20230321%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ccfb94fc9c6278331378033111fde9a635a13698bf7858fcec5ceb366c08ed98",
        "images": {
          "THUMBNAIL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/384/3843c8dec3dcbabaa0d90070e735cfba-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIAs2fBjkEzVJk%2F1OQPDuoVtuVTUf37KrveWp2TuWAiBVAiBCvepbr4JJ83VLpEB6YZIVap76705x9RDXOYrZ0BdctSrCBQiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMCiVZWBZi36dG3dthKpYFZ1wTVWuifefe5XCZYQM%2FtbQslxNRUQI4w75RB09guanYR%2B9pie0n73ewaiwpq3%2Bm5O3tBniA97kirAv6XLN%2BdgO44hktWFq1NbOYmwG%2FH4Go5nh9o8t0PkHThE1yzSWyLOeRUoPQ2lfz4qsC0Ucfv7DBjpVbRIfNhXqIYdMvTOxIqAzKMzHKbz1HgJiyEEA%2BGd4C73XpiWkpbzr1zmWFOEeYluiKICNkr4tNMYFfJlQXhqcv%2B%2B8CjhTU71Lx92nnHVwBiIqyv7%2B%2FoJDEquaOSEUOezsf26GbI9V1c8DVS%2ByJzZ11HC0AUzSCFUL1PLn7eP8tFbPCOK2ZRY2Tsa%2Bt%2BCSMgIOiQryktnvpnoxfzbgiNtuMbUe67AjDPGyTYLECMVZYcXXICTRxzYtptd%2Fr%2FHvDeNywwswjn%2FhRUwNg7PUFwwMyRGnA4kr03HnrUDJxQ8AJofufbzwRERizUCNGYwb%2BjZk22znMinKugwB9pHRVz0NcgiFZViBjrb47Sp3ZjtkYaKSZBMTRhcLMsQ2sWWMX0cbv0oljE1kcLtNi1dMfcntWSgJPFRgUFSUK0B5o%2Fut8EnrTKQNcZ9hXvxD%2F9kuehlT3Ppr1r%2Fl0KiHammildZMwn6B%2BXK%2FfoQyBfhdNQEeoo8lF2Mt592cgI2g3T8PxxbDFZqk17rmx6yVOnl8OSRxjZ506iXwnBBpFqMx%2FC5N8icHsswlz3dW%2FQfHwosAo9Gdy74nF7tW3fFeDiwwTty6KPl35c%2F0WwAw%2BP5qxWSF3Ltr8rF4l26LvrT4yw9JN7oBXxd%2B%2BG2i25QI0Li1NWB9jLg37%2BOSdtmpW34YHno82tSgwFI50SI96Z8jr%2BBZgT2hB%2FTXyrhEtMafGsiEWKRYggUMwzeHkoAY6sgFCHxNh5uMZ6WQKr7GdWZ9FQUMtWJseE1KE5mVeg2B5qiLWAIREupCMaHy5EuzSt23Q9OV9wV4mZn%2F2XFJwbnOya0hoMzA0pivIyuQwZjMW9DtN%2B5Gvct3u7ID%2Fc7U4VCYDA00K%2BSOuEPgTziUpFmqlwTuMmWXe%2BCQI2%2Bv6NWdIUvpAhGcQYJPVrJmtG1Ste5jLYpdng6lZN5TdiKHiuUbZwr78%2F13nELBjC%2F4ScDa1%2F%2BnD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230321T051254Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFLAXK57H3%2F20230321%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=cae6253489eaa69db56dc7e34353a73a768c9da00ef5da73bf6f8ddca0e3d2a6",
            "width": 100,
            "height": 100
          },
          "SMALL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/384/3843c8dec3dcbabaa0d90070e735cfba-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIAs2fBjkEzVJk%2F1OQPDuoVtuVTUf37KrveWp2TuWAiBVAiBCvepbr4JJ83VLpEB6YZIVap76705x9RDXOYrZ0BdctSrCBQiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMCiVZWBZi36dG3dthKpYFZ1wTVWuifefe5XCZYQM%2FtbQslxNRUQI4w75RB09guanYR%2B9pie0n73ewaiwpq3%2Bm5O3tBniA97kirAv6XLN%2BdgO44hktWFq1NbOYmwG%2FH4Go5nh9o8t0PkHThE1yzSWyLOeRUoPQ2lfz4qsC0Ucfv7DBjpVbRIfNhXqIYdMvTOxIqAzKMzHKbz1HgJiyEEA%2BGd4C73XpiWkpbzr1zmWFOEeYluiKICNkr4tNMYFfJlQXhqcv%2B%2B8CjhTU71Lx92nnHVwBiIqyv7%2B%2FoJDEquaOSEUOezsf26GbI9V1c8DVS%2ByJzZ11HC0AUzSCFUL1PLn7eP8tFbPCOK2ZRY2Tsa%2Bt%2BCSMgIOiQryktnvpnoxfzbgiNtuMbUe67AjDPGyTYLECMVZYcXXICTRxzYtptd%2Fr%2FHvDeNywwswjn%2FhRUwNg7PUFwwMyRGnA4kr03HnrUDJxQ8AJofufbzwRERizUCNGYwb%2BjZk22znMinKugwB9pHRVz0NcgiFZViBjrb47Sp3ZjtkYaKSZBMTRhcLMsQ2sWWMX0cbv0oljE1kcLtNi1dMfcntWSgJPFRgUFSUK0B5o%2Fut8EnrTKQNcZ9hXvxD%2F9kuehlT3Ppr1r%2Fl0KiHammildZMwn6B%2BXK%2FfoQyBfhdNQEeoo8lF2Mt592cgI2g3T8PxxbDFZqk17rmx6yVOnl8OSRxjZ506iXwnBBpFqMx%2FC5N8icHsswlz3dW%2FQfHwosAo9Gdy74nF7tW3fFeDiwwTty6KPl35c%2F0WwAw%2BP5qxWSF3Ltr8rF4l26LvrT4yw9JN7oBXxd%2B%2BG2i25QI0Li1NWB9jLg37%2BOSdtmpW34YHno82tSgwFI50SI96Z8jr%2BBZgT2hB%2FTXyrhEtMafGsiEWKRYggUMwzeHkoAY6sgFCHxNh5uMZ6WQKr7GdWZ9FQUMtWJseE1KE5mVeg2B5qiLWAIREupCMaHy5EuzSt23Q9OV9wV4mZn%2F2XFJwbnOya0hoMzA0pivIyuQwZjMW9DtN%2B5Gvct3u7ID%2Fc7U4VCYDA00K%2BSOuEPgTziUpFmqlwTuMmWXe%2BCQI2%2Bv6NWdIUvpAhGcQYJPVrJmtG1Ste5jLYpdng6lZN5TdiKHiuUbZwr78%2F13nELBjC%2F4ScDa1%2F%2BnD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230321T051254Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFLAXK57H3%2F20230321%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8b96edc6c2ea5cfa44ece7b84e4e84188ab91fe8bc1ce456ac45b2b53ce00db9",
            "width": 200,
            "height": 200
          },
          "REGULAR": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/384/3843c8dec3dcbabaa0d90070e735cfba?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIAs2fBjkEzVJk%2F1OQPDuoVtuVTUf37KrveWp2TuWAiBVAiBCvepbr4JJ83VLpEB6YZIVap76705x9RDXOYrZ0BdctSrCBQiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMCiVZWBZi36dG3dthKpYFZ1wTVWuifefe5XCZYQM%2FtbQslxNRUQI4w75RB09guanYR%2B9pie0n73ewaiwpq3%2Bm5O3tBniA97kirAv6XLN%2BdgO44hktWFq1NbOYmwG%2FH4Go5nh9o8t0PkHThE1yzSWyLOeRUoPQ2lfz4qsC0Ucfv7DBjpVbRIfNhXqIYdMvTOxIqAzKMzHKbz1HgJiyEEA%2BGd4C73XpiWkpbzr1zmWFOEeYluiKICNkr4tNMYFfJlQXhqcv%2B%2B8CjhTU71Lx92nnHVwBiIqyv7%2B%2FoJDEquaOSEUOezsf26GbI9V1c8DVS%2ByJzZ11HC0AUzSCFUL1PLn7eP8tFbPCOK2ZRY2Tsa%2Bt%2BCSMgIOiQryktnvpnoxfzbgiNtuMbUe67AjDPGyTYLECMVZYcXXICTRxzYtptd%2Fr%2FHvDeNywwswjn%2FhRUwNg7PUFwwMyRGnA4kr03HnrUDJxQ8AJofufbzwRERizUCNGYwb%2BjZk22znMinKugwB9pHRVz0NcgiFZViBjrb47Sp3ZjtkYaKSZBMTRhcLMsQ2sWWMX0cbv0oljE1kcLtNi1dMfcntWSgJPFRgUFSUK0B5o%2Fut8EnrTKQNcZ9hXvxD%2F9kuehlT3Ppr1r%2Fl0KiHammildZMwn6B%2BXK%2FfoQyBfhdNQEeoo8lF2Mt592cgI2g3T8PxxbDFZqk17rmx6yVOnl8OSRxjZ506iXwnBBpFqMx%2FC5N8icHsswlz3dW%2FQfHwosAo9Gdy74nF7tW3fFeDiwwTty6KPl35c%2F0WwAw%2BP5qxWSF3Ltr8rF4l26LvrT4yw9JN7oBXxd%2B%2BG2i25QI0Li1NWB9jLg37%2BOSdtmpW34YHno82tSgwFI50SI96Z8jr%2BBZgT2hB%2FTXyrhEtMafGsiEWKRYggUMwzeHkoAY6sgFCHxNh5uMZ6WQKr7GdWZ9FQUMtWJseE1KE5mVeg2B5qiLWAIREupCMaHy5EuzSt23Q9OV9wV4mZn%2F2XFJwbnOya0hoMzA0pivIyuQwZjMW9DtN%2B5Gvct3u7ID%2Fc7U4VCYDA00K%2BSOuEPgTziUpFmqlwTuMmWXe%2BCQI2%2Bv6NWdIUvpAhGcQYJPVrJmtG1Ste5jLYpdng6lZN5TdiKHiuUbZwr78%2F13nELBjC%2F4ScDa1%2F%2BnD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230321T051254Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFLAXK57H3%2F20230321%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ccfb94fc9c6278331378033111fde9a635a13698bf7858fcec5ceb366c08ed98",
            "width": 300,
            "height": 300
          }
        },
        "source": "Smitten Kitchen",
        "url": "https://smittenkitchen.com/2015/12/potato-kugel/",
        "shareAs": "http://www.edamam.com/recipe/potato-kugel-recipes-feada59ee17c28712fd23c37a2457387/potato",
        "yield": 12,
        "dietLabels": [],
        "healthLabels": [
          "Sugar-Conscious",
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Kosher"
        ],
        "cautions": [
          "Gluten",
          "Wheat"
        ],
        "ingredientLines": [
          "1 large or 2 small yellow onions",
          "3 pounds or about 5 large baking — Russet or Idaho — potatoes, peeled",
          "1/3 cup potato starch*",
          "2 teaspoons kosher salt",
          "freshly ground black pepper",
          "3 large eggs",
          "5 tablespoons olive oil, schmaltz or another oil of your choice"
        ],
        "ingredients": [
          {
            "text": "1 large or 2 small yellow onions",
            "quantity": 1,
            "measure": "<unit>",
            "food": "yellow onions",
            "weight": 70,
            "foodCategory": "vegetables",
            "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
            "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
          },
          {
            "text": "3 pounds or about 5 large baking — Russet or Idaho — potatoes, peeled",
            "quantity": 3,
            "measure": "pound",
            "food": "potatoes",
            "weight": 1360.77711,
            "foodCategory": "vegetables",
            "foodId": "food_abiw5baauresjmb6xpap2bg3otzu",
            "image": "https://www.edamam.com/food-img/651/6512e82417bce15c2899630c1a2799df.jpg"
          },
          {
            "text": "1/3 cup potato starch*",
            "quantity": 0.3333333333333333,
            "measure": "cup",
            "food": "potato starch",
            "weight": 42.666666666666664,
            "foodCategory": "grains",
            "foodId": "food_b84cpw8b4ow2ulbapa2agas4f9ev",
            "image": "https://www.edamam.com/food-img/f9b/f9b74d9495b40c0aea955c37a1fc39dc.jpg"
          },
          {
            "text": "2 teaspoons kosher salt",
            "quantity": 2,
            "measure": "teaspoon",
            "food": "kosher salt",
            "weight": 9.70833333382575,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "freshly ground black pepper",
            "quantity": 0,
            "measure": null,
            "food": "black pepper",
            "weight": 5.1094563300014775,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
          },
          {
            "text": "3 large eggs",
            "quantity": 3,
            "measure": "<unit>",
            "food": "eggs",
            "weight": 150,
            "foodCategory": "Eggs",
            "foodId": "food_bhpradua77pk16aipcvzeayg732r",
            "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
          },
          {
            "text": "5 tablespoons olive oil, schmaltz or another oil of your choice",
            "quantity": 5,
            "measure": "tablespoon",
            "food": "oil",
            "weight": 70,
            "foodCategory": "Oils",
            "foodId": "food_bk9p9aaavhvoq4bqsnprobpsiuxs",
            "image": "https://www.edamam.com/food-img/07e/07e106ab3536d57428e5c46d009038f8.jpg"
          }
        ],
        "calories": 2084.483110088304,
        "totalWeight": 1707.9645624109905,
        "totalTime": 80,
        "cuisineType": [
          "kosher"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2084.483110088304,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 85.74760100869139,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 10.302665680713622,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.3335,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 49.861101091145386,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 23.224593198140084,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 287.55512510670263,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 254.75133623521225,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 32.803788871490376,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 14.16976197851201,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 47.73950346802049,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 558,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 3949.9515722690917,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 289.14019713467724,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 348.09001891844576,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 6108.009214078866,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 14.113780388043741,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 6.09606747874134,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1106.562560368069,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 241.3795532091004,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 273.25309067,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 1.1863399008364017,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 1.1490456965940026,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 14.594691825251921,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 4.368160992420304,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 302.3929451761003,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 302.3929451761003,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 1.335,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 3,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 14.000216056832016,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 84.85894510221243,
            "unit": "µg"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 1260.4478866582135,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 104.2241555044152,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 131.9193861672175,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 51.51332840356811,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 95.85170836890087,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 131.2151554859615,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 95.47900693604097,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 186,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 164.58131551121215,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 28.91401971346772,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 82.87857593296329,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 129.95764285274183,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 78.40989104468746,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 55.418795261284906,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 158.080365766867,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 26.819950356566714,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 303.6145451888889,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 98.86165840303347,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 88.38813050723095,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 91.2168239078245,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 336.01238403233106,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 75.59823629402507,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 55.625,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 20,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 93.33477371221345,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 70.71578758517703,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 85.74760100869139,
            "hasRDI": true,
            "daily": 131.9193861672175,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 10.302665680713622,
                "hasRDI": true,
                "daily": 51.51332840356811,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 0.3335,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 49.861101091145386,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 23.224593198140084,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 287.55512510670263,
            "hasRDI": true,
            "daily": 95.85170836890087,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 254.75133623521225,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 32.803788871490376,
                "hasRDI": true,
                "daily": 131.2151554859615,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 14.16976197851201,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 47.73950346802049,
            "hasRDI": true,
            "daily": 95.47900693604097,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 558,
            "hasRDI": true,
            "daily": 186,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 3949.9515722690917,
            "hasRDI": true,
            "daily": 164.58131551121215,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 289.14019713467724,
            "hasRDI": true,
            "daily": 28.91401971346772,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 348.09001891844576,
            "hasRDI": true,
            "daily": 82.87857593296329,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 6108.009214078866,
            "hasRDI": true,
            "daily": 129.95764285274183,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 14.113780388043741,
            "hasRDI": true,
            "daily": 78.40989104468746,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 6.09606747874134,
            "hasRDI": true,
            "daily": 55.418795261284906,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 1106.562560368069,
            "hasRDI": true,
            "daily": 158.080365766867,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 241.3795532091004,
            "hasRDI": true,
            "daily": 26.819950356566714,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 273.25309067,
            "hasRDI": true,
            "daily": 303.6145451888889,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 1.1863399008364017,
            "hasRDI": true,
            "daily": 98.86165840303347,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 1.1490456965940026,
            "hasRDI": true,
            "daily": 88.38813050723095,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 14.594691825251921,
            "hasRDI": true,
            "daily": 91.2168239078245,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 4.368160992420304,
            "hasRDI": true,
            "daily": 336.01238403233106,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 302.3929451761003,
            "hasRDI": true,
            "daily": 75.59823629402507,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 302.3929451761003,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 1.335,
            "hasRDI": true,
            "daily": 55.625,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 3,
            "hasRDI": true,
            "daily": 20,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 14.000216056832016,
            "hasRDI": true,
            "daily": 93.33477371221345,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 84.85894510221243,
            "hasRDI": true,
            "daily": 70.71578758517703,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 1260.4478866582135,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          }
        ]
      },
      "_links": {
        "self": {
          "title": "Self",
          "href": "https://api.edamam.com/api/recipes/v2/feada59ee17c28712fd23c37a2457387?type=public&app_id=cc240aca&app_key=0a8c95e6cec1cf2d3976f987892f75d7"
        }
      }
    },
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_c84b04f76959e945c3fe7cb4f4d3a669",
        "label": "Super Bowl Snacks: Loaded Baked Potato Potato Chip Nachos Recipe",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/8d0/8d0f29fb341a1e8685304cdf29ea9c30.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIAs2fBjkEzVJk%2F1OQPDuoVtuVTUf37KrveWp2TuWAiBVAiBCvepbr4JJ83VLpEB6YZIVap76705x9RDXOYrZ0BdctSrCBQiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMCiVZWBZi36dG3dthKpYFZ1wTVWuifefe5XCZYQM%2FtbQslxNRUQI4w75RB09guanYR%2B9pie0n73ewaiwpq3%2Bm5O3tBniA97kirAv6XLN%2BdgO44hktWFq1NbOYmwG%2FH4Go5nh9o8t0PkHThE1yzSWyLOeRUoPQ2lfz4qsC0Ucfv7DBjpVbRIfNhXqIYdMvTOxIqAzKMzHKbz1HgJiyEEA%2BGd4C73XpiWkpbzr1zmWFOEeYluiKICNkr4tNMYFfJlQXhqcv%2B%2B8CjhTU71Lx92nnHVwBiIqyv7%2B%2FoJDEquaOSEUOezsf26GbI9V1c8DVS%2ByJzZ11HC0AUzSCFUL1PLn7eP8tFbPCOK2ZRY2Tsa%2Bt%2BCSMgIOiQryktnvpnoxfzbgiNtuMbUe67AjDPGyTYLECMVZYcXXICTRxzYtptd%2Fr%2FHvDeNywwswjn%2FhRUwNg7PUFwwMyRGnA4kr03HnrUDJxQ8AJofufbzwRERizUCNGYwb%2BjZk22znMinKugwB9pHRVz0NcgiFZViBjrb47Sp3ZjtkYaKSZBMTRhcLMsQ2sWWMX0cbv0oljE1kcLtNi1dMfcntWSgJPFRgUFSUK0B5o%2Fut8EnrTKQNcZ9hXvxD%2F9kuehlT3Ppr1r%2Fl0KiHammildZMwn6B%2BXK%2FfoQyBfhdNQEeoo8lF2Mt592cgI2g3T8PxxbDFZqk17rmx6yVOnl8OSRxjZ506iXwnBBpFqMx%2FC5N8icHsswlz3dW%2FQfHwosAo9Gdy74nF7tW3fFeDiwwTty6KPl35c%2F0WwAw%2BP5qxWSF3Ltr8rF4l26LvrT4yw9JN7oBXxd%2B%2BG2i25QI0Li1NWB9jLg37%2BOSdtmpW34YHno82tSgwFI50SI96Z8jr%2BBZgT2hB%2FTXyrhEtMafGsiEWKRYggUMwzeHkoAY6sgFCHxNh5uMZ6WQKr7GdWZ9FQUMtWJseE1KE5mVeg2B5qiLWAIREupCMaHy5EuzSt23Q9OV9wV4mZn%2F2XFJwbnOya0hoMzA0pivIyuQwZjMW9DtN%2B5Gvct3u7ID%2Fc7U4VCYDA00K%2BSOuEPgTziUpFmqlwTuMmWXe%2BCQI2%2Bv6NWdIUvpAhGcQYJPVrJmtG1Ste5jLYpdng6lZN5TdiKHiuUbZwr78%2F13nELBjC%2F4ScDa1%2F%2BnD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230321T051254Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFLAXK57H3%2F20230321%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=79f1093fa9174f1247c76574193c61d171f708adc4b0ae67a93e1eb13447b4a6",
        "images": {
          "THUMBNAIL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/8d0/8d0f29fb341a1e8685304cdf29ea9c30-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIAs2fBjkEzVJk%2F1OQPDuoVtuVTUf37KrveWp2TuWAiBVAiBCvepbr4JJ83VLpEB6YZIVap76705x9RDXOYrZ0BdctSrCBQiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMCiVZWBZi36dG3dthKpYFZ1wTVWuifefe5XCZYQM%2FtbQslxNRUQI4w75RB09guanYR%2B9pie0n73ewaiwpq3%2Bm5O3tBniA97kirAv6XLN%2BdgO44hktWFq1NbOYmwG%2FH4Go5nh9o8t0PkHThE1yzSWyLOeRUoPQ2lfz4qsC0Ucfv7DBjpVbRIfNhXqIYdMvTOxIqAzKMzHKbz1HgJiyEEA%2BGd4C73XpiWkpbzr1zmWFOEeYluiKICNkr4tNMYFfJlQXhqcv%2B%2B8CjhTU71Lx92nnHVwBiIqyv7%2B%2FoJDEquaOSEUOezsf26GbI9V1c8DVS%2ByJzZ11HC0AUzSCFUL1PLn7eP8tFbPCOK2ZRY2Tsa%2Bt%2BCSMgIOiQryktnvpnoxfzbgiNtuMbUe67AjDPGyTYLECMVZYcXXICTRxzYtptd%2Fr%2FHvDeNywwswjn%2FhRUwNg7PUFwwMyRGnA4kr03HnrUDJxQ8AJofufbzwRERizUCNGYwb%2BjZk22znMinKugwB9pHRVz0NcgiFZViBjrb47Sp3ZjtkYaKSZBMTRhcLMsQ2sWWMX0cbv0oljE1kcLtNi1dMfcntWSgJPFRgUFSUK0B5o%2Fut8EnrTKQNcZ9hXvxD%2F9kuehlT3Ppr1r%2Fl0KiHammildZMwn6B%2BXK%2FfoQyBfhdNQEeoo8lF2Mt592cgI2g3T8PxxbDFZqk17rmx6yVOnl8OSRxjZ506iXwnBBpFqMx%2FC5N8icHsswlz3dW%2FQfHwosAo9Gdy74nF7tW3fFeDiwwTty6KPl35c%2F0WwAw%2BP5qxWSF3Ltr8rF4l26LvrT4yw9JN7oBXxd%2B%2BG2i25QI0Li1NWB9jLg37%2BOSdtmpW34YHno82tSgwFI50SI96Z8jr%2BBZgT2hB%2FTXyrhEtMafGsiEWKRYggUMwzeHkoAY6sgFCHxNh5uMZ6WQKr7GdWZ9FQUMtWJseE1KE5mVeg2B5qiLWAIREupCMaHy5EuzSt23Q9OV9wV4mZn%2F2XFJwbnOya0hoMzA0pivIyuQwZjMW9DtN%2B5Gvct3u7ID%2Fc7U4VCYDA00K%2BSOuEPgTziUpFmqlwTuMmWXe%2BCQI2%2Bv6NWdIUvpAhGcQYJPVrJmtG1Ste5jLYpdng6lZN5TdiKHiuUbZwr78%2F13nELBjC%2F4ScDa1%2F%2BnD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230321T051254Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFLAXK57H3%2F20230321%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=54a9bf21ff3ace474bb10bd892c60c2dc6d88ce9246914aed70c921c658ba372",
            "width": 100,
            "height": 100
          },
          "SMALL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/8d0/8d0f29fb341a1e8685304cdf29ea9c30-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIAs2fBjkEzVJk%2F1OQPDuoVtuVTUf37KrveWp2TuWAiBVAiBCvepbr4JJ83VLpEB6YZIVap76705x9RDXOYrZ0BdctSrCBQiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMCiVZWBZi36dG3dthKpYFZ1wTVWuifefe5XCZYQM%2FtbQslxNRUQI4w75RB09guanYR%2B9pie0n73ewaiwpq3%2Bm5O3tBniA97kirAv6XLN%2BdgO44hktWFq1NbOYmwG%2FH4Go5nh9o8t0PkHThE1yzSWyLOeRUoPQ2lfz4qsC0Ucfv7DBjpVbRIfNhXqIYdMvTOxIqAzKMzHKbz1HgJiyEEA%2BGd4C73XpiWkpbzr1zmWFOEeYluiKICNkr4tNMYFfJlQXhqcv%2B%2B8CjhTU71Lx92nnHVwBiIqyv7%2B%2FoJDEquaOSEUOezsf26GbI9V1c8DVS%2ByJzZ11HC0AUzSCFUL1PLn7eP8tFbPCOK2ZRY2Tsa%2Bt%2BCSMgIOiQryktnvpnoxfzbgiNtuMbUe67AjDPGyTYLECMVZYcXXICTRxzYtptd%2Fr%2FHvDeNywwswjn%2FhRUwNg7PUFwwMyRGnA4kr03HnrUDJxQ8AJofufbzwRERizUCNGYwb%2BjZk22znMinKugwB9pHRVz0NcgiFZViBjrb47Sp3ZjtkYaKSZBMTRhcLMsQ2sWWMX0cbv0oljE1kcLtNi1dMfcntWSgJPFRgUFSUK0B5o%2Fut8EnrTKQNcZ9hXvxD%2F9kuehlT3Ppr1r%2Fl0KiHammildZMwn6B%2BXK%2FfoQyBfhdNQEeoo8lF2Mt592cgI2g3T8PxxbDFZqk17rmx6yVOnl8OSRxjZ506iXwnBBpFqMx%2FC5N8icHsswlz3dW%2FQfHwosAo9Gdy74nF7tW3fFeDiwwTty6KPl35c%2F0WwAw%2BP5qxWSF3Ltr8rF4l26LvrT4yw9JN7oBXxd%2B%2BG2i25QI0Li1NWB9jLg37%2BOSdtmpW34YHno82tSgwFI50SI96Z8jr%2BBZgT2hB%2FTXyrhEtMafGsiEWKRYggUMwzeHkoAY6sgFCHxNh5uMZ6WQKr7GdWZ9FQUMtWJseE1KE5mVeg2B5qiLWAIREupCMaHy5EuzSt23Q9OV9wV4mZn%2F2XFJwbnOya0hoMzA0pivIyuQwZjMW9DtN%2B5Gvct3u7ID%2Fc7U4VCYDA00K%2BSOuEPgTziUpFmqlwTuMmWXe%2BCQI2%2Bv6NWdIUvpAhGcQYJPVrJmtG1Ste5jLYpdng6lZN5TdiKHiuUbZwr78%2F13nELBjC%2F4ScDa1%2F%2BnD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230321T051254Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFLAXK57H3%2F20230321%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=592e266db7b2643277058a107b52e8afbe54273f642d51d1228cc56c2668323c",
            "width": 200,
            "height": 200
          },
          "REGULAR": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/8d0/8d0f29fb341a1e8685304cdf29ea9c30.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIAs2fBjkEzVJk%2F1OQPDuoVtuVTUf37KrveWp2TuWAiBVAiBCvepbr4JJ83VLpEB6YZIVap76705x9RDXOYrZ0BdctSrCBQiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMCiVZWBZi36dG3dthKpYFZ1wTVWuifefe5XCZYQM%2FtbQslxNRUQI4w75RB09guanYR%2B9pie0n73ewaiwpq3%2Bm5O3tBniA97kirAv6XLN%2BdgO44hktWFq1NbOYmwG%2FH4Go5nh9o8t0PkHThE1yzSWyLOeRUoPQ2lfz4qsC0Ucfv7DBjpVbRIfNhXqIYdMvTOxIqAzKMzHKbz1HgJiyEEA%2BGd4C73XpiWkpbzr1zmWFOEeYluiKICNkr4tNMYFfJlQXhqcv%2B%2B8CjhTU71Lx92nnHVwBiIqyv7%2B%2FoJDEquaOSEUOezsf26GbI9V1c8DVS%2ByJzZ11HC0AUzSCFUL1PLn7eP8tFbPCOK2ZRY2Tsa%2Bt%2BCSMgIOiQryktnvpnoxfzbgiNtuMbUe67AjDPGyTYLECMVZYcXXICTRxzYtptd%2Fr%2FHvDeNywwswjn%2FhRUwNg7PUFwwMyRGnA4kr03HnrUDJxQ8AJofufbzwRERizUCNGYwb%2BjZk22znMinKugwB9pHRVz0NcgiFZViBjrb47Sp3ZjtkYaKSZBMTRhcLMsQ2sWWMX0cbv0oljE1kcLtNi1dMfcntWSgJPFRgUFSUK0B5o%2Fut8EnrTKQNcZ9hXvxD%2F9kuehlT3Ppr1r%2Fl0KiHammildZMwn6B%2BXK%2FfoQyBfhdNQEeoo8lF2Mt592cgI2g3T8PxxbDFZqk17rmx6yVOnl8OSRxjZ506iXwnBBpFqMx%2FC5N8icHsswlz3dW%2FQfHwosAo9Gdy74nF7tW3fFeDiwwTty6KPl35c%2F0WwAw%2BP5qxWSF3Ltr8rF4l26LvrT4yw9JN7oBXxd%2B%2BG2i25QI0Li1NWB9jLg37%2BOSdtmpW34YHno82tSgwFI50SI96Z8jr%2BBZgT2hB%2FTXyrhEtMafGsiEWKRYggUMwzeHkoAY6sgFCHxNh5uMZ6WQKr7GdWZ9FQUMtWJseE1KE5mVeg2B5qiLWAIREupCMaHy5EuzSt23Q9OV9wV4mZn%2F2XFJwbnOya0hoMzA0pivIyuQwZjMW9DtN%2B5Gvct3u7ID%2Fc7U4VCYDA00K%2BSOuEPgTziUpFmqlwTuMmWXe%2BCQI2%2Bv6NWdIUvpAhGcQYJPVrJmtG1Ste5jLYpdng6lZN5TdiKHiuUbZwr78%2F13nELBjC%2F4ScDa1%2F%2BnD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230321T051254Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFLAXK57H3%2F20230321%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=79f1093fa9174f1247c76574193c61d171f708adc4b0ae67a93e1eb13447b4a6",
            "width": 300,
            "height": 300
          }
        },
        "source": "Serious Eats",
        "url": "http://www.seriouseats.com/recipes/2009/01/loaded-baked-potato-potato-chip-nachos-super-bowl-recipe.html",
        "shareAs": "http://www.edamam.com/recipe/super-bowl-snacks-loaded-baked-potato-potato-chip-nachos-recipe-c84b04f76959e945c3fe7cb4f4d3a669/potato",
        "yield": 6,
        "dietLabels": [],
        "healthLabels": [
          "Sugar-Conscious",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free"
        ],
        "cautions": [
          "Soy",
          "Sulfites"
        ],
        "ingredientLines": [
          "1 seven-ounce bag of kettle-cooked potato chips",
          "1 medium russet potato, peeled, and cut into 1-inch cubes",
          "1/2 cup whole milk",
          "1 tablespoon butter",
          "Salt and pepper",
          "4 strips thick-cut bacon",
          "1 cup grated extra sharp cheddar cheese",
          "2 to 3 scallions, sliced",
          "1/4 cup sour cream"
        ],
        "ingredients": [
          {
            "text": "1 seven-ounce bag of kettle-cooked potato chips",
            "quantity": 7,
            "measure": "ounce",
            "food": "potato chips",
            "weight": 198.44666187500002,
            "foodCategory": "savory snacks",
            "foodId": "food_amoh1f4bzeg7d4bx0lsfbag697qz",
            "image": "https://www.edamam.com/food-img/d84/d84549a680fa1065d146578cba8235e3.jpg"
          },
          {
            "text": "1 medium russet potato, peeled, and cut into 1-inch cubes",
            "quantity": 1,
            "measure": "<unit>",
            "food": "russet potato",
            "weight": 213,
            "foodCategory": "vegetables",
            "foodId": "food_brsjy86bq09pzgbmr4ri8bnohrf7",
            "image": "https://www.edamam.com/food-img/71b/71b3756ecfd3d1efa075874377038b67.jpg"
          },
          {
            "text": "1/2 cup whole milk",
            "quantity": 0.5,
            "measure": "cup",
            "food": "whole milk",
            "weight": 122,
            "foodCategory": "Milk",
            "foodId": "food_b49rs1kaw0jktabzkg2vvanvvsis",
            "image": "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg"
          },
          {
            "text": "1 tablespoon butter",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "butter",
            "weight": 14.2,
            "foodCategory": "Dairy",
            "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
            "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
          },
          {
            "text": "Salt and pepper",
            "quantity": 0,
            "measure": null,
            "food": "Salt",
            "weight": 5.327213304583333,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "Salt and pepper",
            "quantity": 0,
            "measure": null,
            "food": "pepper",
            "weight": 2.6636066522916666,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
          },
          {
            "text": "4 strips thick-cut bacon",
            "quantity": 4,
            "measure": "strip",
            "food": "bacon",
            "weight": 116,
            "foodCategory": "cured meats",
            "foodId": "food_av0awb0bgs18qub01sd9kbx44b61",
            "image": "https://www.edamam.com/food-img/d42/d426884a125fa39a70d5a5d7217864ec.jpg"
          },
          {
            "text": "1 cup grated extra sharp cheddar cheese",
            "quantity": 1,
            "measure": "cup",
            "food": "cheddar cheese",
            "weight": 132,
            "foodCategory": "Cheese",
            "foodId": "food_bhppgmha1u27voagb8eptbp9g376",
            "image": "https://www.edamam.com/food-img/bcd/bcd94dde1fcde1475b5bf0540f821c5d.jpg"
          },
          {
            "text": "2 to 3 scallions, sliced",
            "quantity": 2.5,
            "measure": "<unit>",
            "food": "scallions",
            "weight": 34.72222222222223,
            "foodCategory": "vegetables",
            "foodId": "food_bknlkyzbuzo27pb11whr4bttkuy6",
            "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
          },
          {
            "text": "1/4 cup sour cream",
            "quantity": 0.25,
            "measure": "cup",
            "food": "sour cream",
            "weight": 57.5,
            "foodCategory": "Dairy",
            "foodId": "food_adp9fcubzl3lr7bcvzn3rbfiiiwq",
            "image": "https://www.edamam.com/food-img/f9d/f9d6183267b041b0aff9a10b89c9c15f.jpg"
          }
        ],
        "calories": 2548.652004983364,
        "totalWeight": 890.532490749514,
        "totalTime": 0,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "starter"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2548.652004983364,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 185.26555150421194,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 64.025956019461,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 2.342731195975,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 75.90868154451671,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 27.110425775321815,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 160.32584565256414,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 149.82832887363156,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 10.497516778932571,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 12.156668844539947,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 69.67705709165227,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 283.83,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 2761.599184967264,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 1207.481576463402,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 253.3046088011132,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 3968.3877417672893,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 5.96843236682641,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 9.52696220026644,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1401.242113401593,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 632.4482849072299,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 62.05075674277778,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 1.0526553072004472,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 1.2542433322019026,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 16.761535729189863,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 2.2678944254699744,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 154.9155672968618,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 154.9155672968618,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 2.47574,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 3.285,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 23.173889897343557,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 130.14903636417648,
            "unit": "µg"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 455.7603455219728,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 127.4326002491682,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 285.0239253910953,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 320.12978009730506,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 53.44194855085472,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 41.990067115730284,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 139.35411418330455,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 94.61,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 115.06663270696934,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 120.7481576463402,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 60.31062114312219,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 84.43378173972955,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 33.157957593480056,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 86.60874727514944,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 200.17744477165613,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 70.27203165635888,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 68.94528526975309,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 87.72127560003727,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 96.48025632322327,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 104.75959830743665,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 174.45341734384417,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 38.72889182421545,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 103.15583333333335,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 21.9,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 154.49259931562372,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 108.4575303034804,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 185.26555150421194,
            "hasRDI": true,
            "daily": 285.0239253910953,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 64.025956019461,
                "hasRDI": true,
                "daily": 320.12978009730506,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 2.342731195975,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 75.90868154451671,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 27.110425775321815,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 160.32584565256414,
            "hasRDI": true,
            "daily": 53.44194855085472,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 149.82832887363156,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 10.497516778932571,
                "hasRDI": true,
                "daily": 41.990067115730284,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 12.156668844539947,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 69.67705709165227,
            "hasRDI": true,
            "daily": 139.35411418330455,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 283.83,
            "hasRDI": true,
            "daily": 94.61,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 2761.599184967264,
            "hasRDI": true,
            "daily": 115.06663270696934,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 1207.481576463402,
            "hasRDI": true,
            "daily": 120.7481576463402,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 253.3046088011132,
            "hasRDI": true,
            "daily": 60.31062114312219,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 3968.3877417672893,
            "hasRDI": true,
            "daily": 84.43378173972955,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 5.96843236682641,
            "hasRDI": true,
            "daily": 33.157957593480056,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 9.52696220026644,
            "hasRDI": true,
            "daily": 86.60874727514944,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 1401.242113401593,
            "hasRDI": true,
            "daily": 200.17744477165613,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 632.4482849072299,
            "hasRDI": true,
            "daily": 70.27203165635888,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 62.05075674277778,
            "hasRDI": true,
            "daily": 68.94528526975309,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 1.0526553072004472,
            "hasRDI": true,
            "daily": 87.72127560003727,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 1.2542433322019026,
            "hasRDI": true,
            "daily": 96.48025632322327,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 16.761535729189863,
            "hasRDI": true,
            "daily": 104.75959830743665,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 2.2678944254699744,
            "hasRDI": true,
            "daily": 174.45341734384417,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 154.9155672968618,
            "hasRDI": true,
            "daily": 38.72889182421545,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 154.9155672968618,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 2.47574,
            "hasRDI": true,
            "daily": 103.15583333333335,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 3.285,
            "hasRDI": true,
            "daily": 21.9,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 23.173889897343557,
            "hasRDI": true,
            "daily": 154.49259931562372,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 130.14903636417648,
            "hasRDI": true,
            "daily": 108.4575303034804,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 455.7603455219728,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          }
        ]
      },
      "_links": {
        "self": {
          "title": "Self",
          "href": "https://api.edamam.com/api/recipes/v2/c84b04f76959e945c3fe7cb4f4d3a669?type=public&app_id=cc240aca&app_key=0a8c95e6cec1cf2d3976f987892f75d7"
        }
      }
    },
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_313ae5368717aaea847cc31d0399d6c8",
        "label": "Homemade Potato Bread recipes",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/ee2/ee22dd24a586669ec855ad2c71bc58dd?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIAs2fBjkEzVJk%2F1OQPDuoVtuVTUf37KrveWp2TuWAiBVAiBCvepbr4JJ83VLpEB6YZIVap76705x9RDXOYrZ0BdctSrCBQiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMCiVZWBZi36dG3dthKpYFZ1wTVWuifefe5XCZYQM%2FtbQslxNRUQI4w75RB09guanYR%2B9pie0n73ewaiwpq3%2Bm5O3tBniA97kirAv6XLN%2BdgO44hktWFq1NbOYmwG%2FH4Go5nh9o8t0PkHThE1yzSWyLOeRUoPQ2lfz4qsC0Ucfv7DBjpVbRIfNhXqIYdMvTOxIqAzKMzHKbz1HgJiyEEA%2BGd4C73XpiWkpbzr1zmWFOEeYluiKICNkr4tNMYFfJlQXhqcv%2B%2B8CjhTU71Lx92nnHVwBiIqyv7%2B%2FoJDEquaOSEUOezsf26GbI9V1c8DVS%2ByJzZ11HC0AUzSCFUL1PLn7eP8tFbPCOK2ZRY2Tsa%2Bt%2BCSMgIOiQryktnvpnoxfzbgiNtuMbUe67AjDPGyTYLECMVZYcXXICTRxzYtptd%2Fr%2FHvDeNywwswjn%2FhRUwNg7PUFwwMyRGnA4kr03HnrUDJxQ8AJofufbzwRERizUCNGYwb%2BjZk22znMinKugwB9pHRVz0NcgiFZViBjrb47Sp3ZjtkYaKSZBMTRhcLMsQ2sWWMX0cbv0oljE1kcLtNi1dMfcntWSgJPFRgUFSUK0B5o%2Fut8EnrTKQNcZ9hXvxD%2F9kuehlT3Ppr1r%2Fl0KiHammildZMwn6B%2BXK%2FfoQyBfhdNQEeoo8lF2Mt592cgI2g3T8PxxbDFZqk17rmx6yVOnl8OSRxjZ506iXwnBBpFqMx%2FC5N8icHsswlz3dW%2FQfHwosAo9Gdy74nF7tW3fFeDiwwTty6KPl35c%2F0WwAw%2BP5qxWSF3Ltr8rF4l26LvrT4yw9JN7oBXxd%2B%2BG2i25QI0Li1NWB9jLg37%2BOSdtmpW34YHno82tSgwFI50SI96Z8jr%2BBZgT2hB%2FTXyrhEtMafGsiEWKRYggUMwzeHkoAY6sgFCHxNh5uMZ6WQKr7GdWZ9FQUMtWJseE1KE5mVeg2B5qiLWAIREupCMaHy5EuzSt23Q9OV9wV4mZn%2F2XFJwbnOya0hoMzA0pivIyuQwZjMW9DtN%2B5Gvct3u7ID%2Fc7U4VCYDA00K%2BSOuEPgTziUpFmqlwTuMmWXe%2BCQI2%2Bv6NWdIUvpAhGcQYJPVrJmtG1Ste5jLYpdng6lZN5TdiKHiuUbZwr78%2F13nELBjC%2F4ScDa1%2F%2BnD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230321T051254Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFLAXK57H3%2F20230321%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=478e0f80181698a8f87e183912e303f3beaf8a3a5114ccdd07f54e1ead804951",
        "images": {
          "THUMBNAIL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/ee2/ee22dd24a586669ec855ad2c71bc58dd-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIAs2fBjkEzVJk%2F1OQPDuoVtuVTUf37KrveWp2TuWAiBVAiBCvepbr4JJ83VLpEB6YZIVap76705x9RDXOYrZ0BdctSrCBQiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMCiVZWBZi36dG3dthKpYFZ1wTVWuifefe5XCZYQM%2FtbQslxNRUQI4w75RB09guanYR%2B9pie0n73ewaiwpq3%2Bm5O3tBniA97kirAv6XLN%2BdgO44hktWFq1NbOYmwG%2FH4Go5nh9o8t0PkHThE1yzSWyLOeRUoPQ2lfz4qsC0Ucfv7DBjpVbRIfNhXqIYdMvTOxIqAzKMzHKbz1HgJiyEEA%2BGd4C73XpiWkpbzr1zmWFOEeYluiKICNkr4tNMYFfJlQXhqcv%2B%2B8CjhTU71Lx92nnHVwBiIqyv7%2B%2FoJDEquaOSEUOezsf26GbI9V1c8DVS%2ByJzZ11HC0AUzSCFUL1PLn7eP8tFbPCOK2ZRY2Tsa%2Bt%2BCSMgIOiQryktnvpnoxfzbgiNtuMbUe67AjDPGyTYLECMVZYcXXICTRxzYtptd%2Fr%2FHvDeNywwswjn%2FhRUwNg7PUFwwMyRGnA4kr03HnrUDJxQ8AJofufbzwRERizUCNGYwb%2BjZk22znMinKugwB9pHRVz0NcgiFZViBjrb47Sp3ZjtkYaKSZBMTRhcLMsQ2sWWMX0cbv0oljE1kcLtNi1dMfcntWSgJPFRgUFSUK0B5o%2Fut8EnrTKQNcZ9hXvxD%2F9kuehlT3Ppr1r%2Fl0KiHammildZMwn6B%2BXK%2FfoQyBfhdNQEeoo8lF2Mt592cgI2g3T8PxxbDFZqk17rmx6yVOnl8OSRxjZ506iXwnBBpFqMx%2FC5N8icHsswlz3dW%2FQfHwosAo9Gdy74nF7tW3fFeDiwwTty6KPl35c%2F0WwAw%2BP5qxWSF3Ltr8rF4l26LvrT4yw9JN7oBXxd%2B%2BG2i25QI0Li1NWB9jLg37%2BOSdtmpW34YHno82tSgwFI50SI96Z8jr%2BBZgT2hB%2FTXyrhEtMafGsiEWKRYggUMwzeHkoAY6sgFCHxNh5uMZ6WQKr7GdWZ9FQUMtWJseE1KE5mVeg2B5qiLWAIREupCMaHy5EuzSt23Q9OV9wV4mZn%2F2XFJwbnOya0hoMzA0pivIyuQwZjMW9DtN%2B5Gvct3u7ID%2Fc7U4VCYDA00K%2BSOuEPgTziUpFmqlwTuMmWXe%2BCQI2%2Bv6NWdIUvpAhGcQYJPVrJmtG1Ste5jLYpdng6lZN5TdiKHiuUbZwr78%2F13nELBjC%2F4ScDa1%2F%2BnD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230321T051254Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFLAXK57H3%2F20230321%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2c676f082ede50f995a71868a4de48a702f1d0a72bdea8a58b0916e82c8f1100",
            "width": 100,
            "height": 100
          },
          "SMALL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/ee2/ee22dd24a586669ec855ad2c71bc58dd-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIAs2fBjkEzVJk%2F1OQPDuoVtuVTUf37KrveWp2TuWAiBVAiBCvepbr4JJ83VLpEB6YZIVap76705x9RDXOYrZ0BdctSrCBQiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMCiVZWBZi36dG3dthKpYFZ1wTVWuifefe5XCZYQM%2FtbQslxNRUQI4w75RB09guanYR%2B9pie0n73ewaiwpq3%2Bm5O3tBniA97kirAv6XLN%2BdgO44hktWFq1NbOYmwG%2FH4Go5nh9o8t0PkHThE1yzSWyLOeRUoPQ2lfz4qsC0Ucfv7DBjpVbRIfNhXqIYdMvTOxIqAzKMzHKbz1HgJiyEEA%2BGd4C73XpiWkpbzr1zmWFOEeYluiKICNkr4tNMYFfJlQXhqcv%2B%2B8CjhTU71Lx92nnHVwBiIqyv7%2B%2FoJDEquaOSEUOezsf26GbI9V1c8DVS%2ByJzZ11HC0AUzSCFUL1PLn7eP8tFbPCOK2ZRY2Tsa%2Bt%2BCSMgIOiQryktnvpnoxfzbgiNtuMbUe67AjDPGyTYLECMVZYcXXICTRxzYtptd%2Fr%2FHvDeNywwswjn%2FhRUwNg7PUFwwMyRGnA4kr03HnrUDJxQ8AJofufbzwRERizUCNGYwb%2BjZk22znMinKugwB9pHRVz0NcgiFZViBjrb47Sp3ZjtkYaKSZBMTRhcLMsQ2sWWMX0cbv0oljE1kcLtNi1dMfcntWSgJPFRgUFSUK0B5o%2Fut8EnrTKQNcZ9hXvxD%2F9kuehlT3Ppr1r%2Fl0KiHammildZMwn6B%2BXK%2FfoQyBfhdNQEeoo8lF2Mt592cgI2g3T8PxxbDFZqk17rmx6yVOnl8OSRxjZ506iXwnBBpFqMx%2FC5N8icHsswlz3dW%2FQfHwosAo9Gdy74nF7tW3fFeDiwwTty6KPl35c%2F0WwAw%2BP5qxWSF3Ltr8rF4l26LvrT4yw9JN7oBXxd%2B%2BG2i25QI0Li1NWB9jLg37%2BOSdtmpW34YHno82tSgwFI50SI96Z8jr%2BBZgT2hB%2FTXyrhEtMafGsiEWKRYggUMwzeHkoAY6sgFCHxNh5uMZ6WQKr7GdWZ9FQUMtWJseE1KE5mVeg2B5qiLWAIREupCMaHy5EuzSt23Q9OV9wV4mZn%2F2XFJwbnOya0hoMzA0pivIyuQwZjMW9DtN%2B5Gvct3u7ID%2Fc7U4VCYDA00K%2BSOuEPgTziUpFmqlwTuMmWXe%2BCQI2%2Bv6NWdIUvpAhGcQYJPVrJmtG1Ste5jLYpdng6lZN5TdiKHiuUbZwr78%2F13nELBjC%2F4ScDa1%2F%2BnD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230321T051254Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFLAXK57H3%2F20230321%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=caad4c95dae33b420c9801988e5413b2d83384e373881ab4257762d81589eb35",
            "width": 200,
            "height": 200
          },
          "REGULAR": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/ee2/ee22dd24a586669ec855ad2c71bc58dd?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIAs2fBjkEzVJk%2F1OQPDuoVtuVTUf37KrveWp2TuWAiBVAiBCvepbr4JJ83VLpEB6YZIVap76705x9RDXOYrZ0BdctSrCBQiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMCiVZWBZi36dG3dthKpYFZ1wTVWuifefe5XCZYQM%2FtbQslxNRUQI4w75RB09guanYR%2B9pie0n73ewaiwpq3%2Bm5O3tBniA97kirAv6XLN%2BdgO44hktWFq1NbOYmwG%2FH4Go5nh9o8t0PkHThE1yzSWyLOeRUoPQ2lfz4qsC0Ucfv7DBjpVbRIfNhXqIYdMvTOxIqAzKMzHKbz1HgJiyEEA%2BGd4C73XpiWkpbzr1zmWFOEeYluiKICNkr4tNMYFfJlQXhqcv%2B%2B8CjhTU71Lx92nnHVwBiIqyv7%2B%2FoJDEquaOSEUOezsf26GbI9V1c8DVS%2ByJzZ11HC0AUzSCFUL1PLn7eP8tFbPCOK2ZRY2Tsa%2Bt%2BCSMgIOiQryktnvpnoxfzbgiNtuMbUe67AjDPGyTYLECMVZYcXXICTRxzYtptd%2Fr%2FHvDeNywwswjn%2FhRUwNg7PUFwwMyRGnA4kr03HnrUDJxQ8AJofufbzwRERizUCNGYwb%2BjZk22znMinKugwB9pHRVz0NcgiFZViBjrb47Sp3ZjtkYaKSZBMTRhcLMsQ2sWWMX0cbv0oljE1kcLtNi1dMfcntWSgJPFRgUFSUK0B5o%2Fut8EnrTKQNcZ9hXvxD%2F9kuehlT3Ppr1r%2Fl0KiHammildZMwn6B%2BXK%2FfoQyBfhdNQEeoo8lF2Mt592cgI2g3T8PxxbDFZqk17rmx6yVOnl8OSRxjZ506iXwnBBpFqMx%2FC5N8icHsswlz3dW%2FQfHwosAo9Gdy74nF7tW3fFeDiwwTty6KPl35c%2F0WwAw%2BP5qxWSF3Ltr8rF4l26LvrT4yw9JN7oBXxd%2B%2BG2i25QI0Li1NWB9jLg37%2BOSdtmpW34YHno82tSgwFI50SI96Z8jr%2BBZgT2hB%2FTXyrhEtMafGsiEWKRYggUMwzeHkoAY6sgFCHxNh5uMZ6WQKr7GdWZ9FQUMtWJseE1KE5mVeg2B5qiLWAIREupCMaHy5EuzSt23Q9OV9wV4mZn%2F2XFJwbnOya0hoMzA0pivIyuQwZjMW9DtN%2B5Gvct3u7ID%2Fc7U4VCYDA00K%2BSOuEPgTziUpFmqlwTuMmWXe%2BCQI2%2Bv6NWdIUvpAhGcQYJPVrJmtG1Ste5jLYpdng6lZN5TdiKHiuUbZwr78%2F13nELBjC%2F4ScDa1%2F%2BnD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230321T051254Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFLAXK57H3%2F20230321%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=478e0f80181698a8f87e183912e303f3beaf8a3a5114ccdd07f54e1ead804951",
            "width": 300,
            "height": 300
          }
        },
        "source": "Simply Recipes",
        "url": "http://www.simplyrecipes.com/recipes/homemade_potato_bread/",
        "shareAs": "http://www.edamam.com/recipe/homemade-potato-bread-recipes-313ae5368717aaea847cc31d0399d6c8/potato",
        "yield": 20,
        "dietLabels": [
          "Low-Fat"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Low Potassium",
          "Kidney-Friendly",
          "Vegetarian",
          "Pescatarian",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Kosher"
        ],
        "cautions": [],
        "ingredientLines": [
          "1 large russet potato (about a 12 oz potato)",
          "2 cups (475 ml) milk",
          "2 teaspoons salt",
          "1 teaspoon sugar",
          "2 Tbsp olive oil",
          "1 packet instant yeast (2 1/4 teaspoons)",
          "5 cups (680g) all purpose flour"
        ],
        "ingredients": [
          {
            "text": "1 large russet potato (about a 12 oz potato)",
            "quantity": 1,
            "measure": "potato",
            "food": "russet potato",
            "weight": 340.1942775,
            "foodCategory": "vegetables",
            "foodId": "food_brsjy86bq09pzgbmr4ri8bnohrf7",
            "image": "https://www.edamam.com/food-img/71b/71b3756ecfd3d1efa075874377038b67.jpg"
          },
          {
            "text": "2 cups (475 ml) milk",
            "quantity": 475,
            "measure": "milliliter",
            "food": "milk",
            "weight": 489.8806538929504,
            "foodCategory": "Milk",
            "foodId": "food_b49rs1kaw0jktabzkg2vvanvvsis",
            "image": "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg"
          },
          {
            "text": "2 teaspoons salt",
            "quantity": 2,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 12,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1 teaspoon sugar",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "sugar",
            "weight": 4.2,
            "foodCategory": "sugars",
            "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
            "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
          },
          {
            "text": "2 Tbsp olive oil",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "olive oil",
            "weight": 27,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "1 packet instant yeast (2 1/4 teaspoons)",
            "quantity": 2.25,
            "measure": "teaspoon",
            "food": "yeast",
            "weight": 9,
            "foodCategory": "condiments and sauces",
            "foodId": "food_a2xisx4br72i19btvvxgzayoelqj",
            "image": "https://www.edamam.com/food-img/433/433749733fd8a22560cdb451b1317be1.jpg"
          },
          {
            "text": "5 cups (680g) all purpose flour",
            "quantity": 680,
            "measure": "gram",
            "food": "all purpose flour",
            "weight": 680,
            "foodCategory": "grains",
            "foodId": "food_ar3x97tbq9o9p6b6gzwj0am0c81l",
            "image": "https://www.edamam.com/food-img/368/368077bbcab62f862a8c766a56ea5dd1.jpg"
          }
        ],
        "calories": 3259.77630829345,
        "totalWeight": 1558.9517345842282,
        "totalTime": 105,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "breakfast"
        ],
        "dishType": [
          "bread"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 3259.77630829345,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 50.47413781802089,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 14.074862079216025,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 24.661813823773258,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 6.716119929585004,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 596.4360608450492,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 572.3381666394241,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 24.097894205625,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 32.348476411968996,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 4.1916,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 94.77495875150294,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 48.988065389295045,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 3605.133347455678,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 693.8285137211906,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 262.2183462899578,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 2525.198210275247,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 34.2704507365741,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 8.036177776157695,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1343.5598887388282,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 225.3451007907572,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 14.570305363125,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 6.761664581453257,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 4.632094388760336,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 46.841951861058476,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.490809728432712,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 2249.6144318321476,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 468.0144318321475,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 1047.2,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 2.210762942518277,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 6.3684485006083555,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 5.806931028537566,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 24.392264707928852,
            "unit": "µg"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 713.7567113268648,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 162.98881541467247,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 77.65251972003215,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 70.37431039608012,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 198.81202028168306,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 96.39157682249999,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 189.54991750300584,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 16.329355129765016,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 150.21388947731992,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 69.38285137211905,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 62.4329395928471,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 53.727621495218024,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 190.39139298096723,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 73.05616160143359,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 191.93712696268975,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 25.03834453230635,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 16.189228181249998,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 563.4720484544381,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 356.3149529815643,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 292.7621991316155,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 114.67767141790091,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 562.4036079580369,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 92.11512260492822,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 42.45632333738904,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 38.712873523583774,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 20.326887256607378,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 50.47413781802089,
            "hasRDI": true,
            "daily": 77.65251972003215,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 14.074862079216025,
                "hasRDI": true,
                "daily": 70.37431039608012,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 24.661813823773258,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 6.716119929585004,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 596.4360608450492,
            "hasRDI": true,
            "daily": 198.81202028168306,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 572.3381666394241,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 24.097894205625,
                "hasRDI": true,
                "daily": 96.39157682249999,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 32.348476411968996,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 4.1916,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 94.77495875150294,
            "hasRDI": true,
            "daily": 189.54991750300584,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 48.988065389295045,
            "hasRDI": true,
            "daily": 16.329355129765016,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 3605.133347455678,
            "hasRDI": true,
            "daily": 150.21388947731992,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 693.8285137211906,
            "hasRDI": true,
            "daily": 69.38285137211905,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 262.2183462899578,
            "hasRDI": true,
            "daily": 62.4329395928471,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 2525.198210275247,
            "hasRDI": true,
            "daily": 53.727621495218024,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 34.2704507365741,
            "hasRDI": true,
            "daily": 190.39139298096723,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 8.036177776157695,
            "hasRDI": true,
            "daily": 73.05616160143359,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 1343.5598887388282,
            "hasRDI": true,
            "daily": 191.93712696268975,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 225.3451007907572,
            "hasRDI": true,
            "daily": 25.03834453230635,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 14.570305363125,
            "hasRDI": true,
            "daily": 16.189228181249998,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 6.761664581453257,
            "hasRDI": true,
            "daily": 563.4720484544381,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 4.632094388760336,
            "hasRDI": true,
            "daily": 356.3149529815643,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 46.841951861058476,
            "hasRDI": true,
            "daily": 292.7621991316155,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 1.490809728432712,
            "hasRDI": true,
            "daily": 114.67767141790091,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 2249.6144318321476,
            "hasRDI": true,
            "daily": 562.4036079580369,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 468.0144318321475,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 1047.2,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 2.210762942518277,
            "hasRDI": true,
            "daily": 92.11512260492822,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 6.3684485006083555,
            "hasRDI": true,
            "daily": 42.45632333738904,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 5.806931028537566,
            "hasRDI": true,
            "daily": 38.712873523583774,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 24.392264707928852,
            "hasRDI": true,
            "daily": 20.326887256607378,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 713.7567113268648,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          }
        ]
      },
      "_links": {
        "self": {
          "title": "Self",
          "href": "https://api.edamam.com/api/recipes/v2/313ae5368717aaea847cc31d0399d6c8?type=public&app_id=cc240aca&app_key=0a8c95e6cec1cf2d3976f987892f75d7"
        }
      }
    },
  ]

export default sampleRecipes