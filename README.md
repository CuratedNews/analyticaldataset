# Analytical Dataset
Our analytical dataset focuses on collating quality news-related data. We have made it open-source so users can see our data and use it as a reference. Our dataset is open-source and freely available.

Check out our [interactive search page/demo](https://curatednews.github.io/analyticaldataset/) and/or [codebook](https://curatednews.github.io/analyticaldataset/CuratedNewsDatasetCodeBook.pdf)

## Usage

Our JSON dataset is available for testing purposes only [https://raw.githubusercontent.com/CuratedNews/analyticaldataset/main/CuratedNewsDataset.json](https://raw.githubusercontent.com/CuratedNews/analyticaldataset/main/CuratedNewsDataset.json)

## Data format example

### title, link, & date of news article
```
{
 "title": "The three challenges keeping cars from being fully autonomous",
 "link": "https://mittr-frontend-prod.herokuapp.com/s/613399/the-three-challenges-keeping-cars-from-being-fully-autonomous/",
 "date": "2020-09-24 00:00:00 UTC",
```

### word count, [sentimentr score](https://github.com/trinker/sentimentr) (whole text), & [overall sentiment of article headline](https://github.com/CuratedNews/analyticaldataset#calculation-of-overall-sentiment-score)
```
 "titlewordcount": 9,
 "titlesentiment": "0.333333333333333",
 "titlesentimentoverall": "Positive",
```

### source, topic, & [leaning](https://curatednews.github.io/analyticaldataset/CuratedNewsDatasetCodeBook.pdf)
```
 "Source": "MIT",
 "Topic": "Technology",
 "Leaning": "Academic",
``` 

### other unique categorical variables (all unique variables must be operationalized/defined) 
```
 "President": "Trump"
}
```

### complete example (minified)
```
{"title": "The three challenges keeping cars from being fully autonomous","link": "https://mittr-frontend-prod.herokuapp.com/s/613399/the-three-challenges-keeping-cars-from-being-fully-autonomous/","date": "2020-09-24 00:00:00 UTC","titlewordcount": 9,"titlesentiment": "0.333333333333333","titlesentimentoverall": "Positive","Source": "MIT","Topic": "Technology","Leaning": "Academic","President": "Trump"}
```

## Calculation of overall sentiment score
  - Overall positive = sentimentr score > 0
  - Overall negative = sentimentr score < 0
  - Overall neutral = sentimentr score = 0

## Other documentation/references
- [sentimentr documentation](https://www.rdocumentation.org/packages/sentimentr/versions/2.9.0) for [R](https://www.r-project.org/about.html)
- [sampling documentation](https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/sample) for [R](https://www.r-project.org/about.html)
- [Our codebook](https://curatednews.github.io/analyticaldataset/CuratedNewsDatasetCodeBook.pdf)

## How it works?
- Check our [interactive search page/demo](https://curatednews.github.io/analyticaldataset/) for a hands-on with explanations of our analytical dataset
- We've made a headlines textual classifier with this dataset. Check out the [demo](https://curatednews.github.io/headlinesclassifier/).

## Contribute
Want to contribute? You can add unique categorical variables to the current data. Send us a pull request.

## See our terms & conditions
[Our terms & conditions](https://curatednews.xyz/curatedterms)

[Our codebook](https://curatednews.github.io/analyticaldataset/CuratedNewsDatasetCodeBook.pdf)

## Want to know more?
Visit [https://curatednews.xyz](https://curatednews.xyz)
