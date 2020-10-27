 if (navigator.onLine){
 document.getElementById('map').innerHTML = '<center><iframe src="https://ourworldindata.org/coronavirus-data-explorer?tab=map&zoomToSelection=true&country=~OWID_WRL&casesMetric=true&interval=total&hideControls=true&smoothing=0&pickerMetric=location&pickerSort=asc" loading="lazy" style="width: 90vw; height: 90vh; box-sizing: border-box;"></iframe></center><br><p>Courtesy : <a href="https://ourworldindata.org" target="_blank" style="color: #0000ff">www.ourworldindata.org</a>.</p>'
 }
 else {
 document.getElementById('map').innerHTML = '<center><h1 style="color: red; height: 90vh; width: 90vw; padding-top : 20%;">Please connect to the internet to view the interactive chart.</h1></center>'
 }
