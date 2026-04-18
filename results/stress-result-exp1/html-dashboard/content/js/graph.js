/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 324.0, "minX": 0.0, "maxY": 4526.0, "series": [{"data": [[0.0, 324.0], [0.1, 335.0], [0.2, 339.0], [0.3, 352.0], [0.4, 353.0], [0.5, 357.0], [0.6, 359.0], [0.7, 367.0], [0.8, 371.0], [0.9, 376.0], [1.0, 382.0], [1.1, 384.0], [1.2, 385.0], [1.3, 390.0], [1.4, 398.0], [1.5, 400.0], [1.6, 403.0], [1.7, 404.0], [1.8, 410.0], [1.9, 411.0], [2.0, 415.0], [2.1, 418.0], [2.2, 423.0], [2.3, 426.0], [2.4, 428.0], [2.5, 431.0], [2.6, 431.0], [2.7, 431.0], [2.8, 433.0], [2.9, 436.0], [3.0, 437.0], [3.1, 441.0], [3.2, 443.0], [3.3, 444.0], [3.4, 445.0], [3.5, 447.0], [3.6, 447.0], [3.7, 448.0], [3.8, 450.0], [3.9, 451.0], [4.0, 456.0], [4.1, 459.0], [4.2, 465.0], [4.3, 466.0], [4.4, 466.0], [4.5, 469.0], [4.6, 472.0], [4.7, 472.0], [4.8, 474.0], [4.9, 475.0], [5.0, 477.0], [5.1, 477.0], [5.2, 478.0], [5.3, 479.0], [5.4, 480.0], [5.5, 484.0], [5.6, 485.0], [5.7, 486.0], [5.8, 486.0], [5.9, 488.0], [6.0, 490.0], [6.1, 492.0], [6.2, 494.0], [6.3, 495.0], [6.4, 496.0], [6.5, 496.0], [6.6, 497.0], [6.7, 498.0], [6.8, 499.0], [6.9, 500.0], [7.0, 501.0], [7.1, 501.0], [7.2, 502.0], [7.3, 502.0], [7.4, 503.0], [7.5, 504.0], [7.6, 505.0], [7.7, 505.0], [7.8, 505.0], [7.9, 505.0], [8.0, 506.0], [8.1, 506.0], [8.2, 506.0], [8.3, 507.0], [8.4, 509.0], [8.5, 510.0], [8.6, 511.0], [8.7, 511.0], [8.8, 512.0], [8.9, 512.0], [9.0, 513.0], [9.1, 514.0], [9.2, 516.0], [9.3, 517.0], [9.4, 517.0], [9.5, 518.0], [9.6, 518.0], [9.7, 519.0], [9.8, 520.0], [9.9, 522.0], [10.0, 526.0], [10.1, 526.0], [10.2, 527.0], [10.3, 527.0], [10.4, 528.0], [10.5, 529.0], [10.6, 530.0], [10.7, 532.0], [10.8, 534.0], [10.9, 538.0], [11.0, 539.0], [11.1, 539.0], [11.2, 540.0], [11.3, 543.0], [11.4, 547.0], [11.5, 550.0], [11.6, 551.0], [11.7, 554.0], [11.8, 555.0], [11.9, 556.0], [12.0, 557.0], [12.1, 561.0], [12.2, 564.0], [12.3, 564.0], [12.4, 565.0], [12.5, 566.0], [12.6, 567.0], [12.7, 569.0], [12.8, 570.0], [12.9, 571.0], [13.0, 572.0], [13.1, 580.0], [13.2, 580.0], [13.3, 581.0], [13.4, 581.0], [13.5, 583.0], [13.6, 584.0], [13.7, 585.0], [13.8, 588.0], [13.9, 590.0], [14.0, 593.0], [14.1, 594.0], [14.2, 595.0], [14.3, 596.0], [14.4, 596.0], [14.5, 597.0], [14.6, 597.0], [14.7, 598.0], [14.8, 601.0], [14.9, 605.0], [15.0, 606.0], [15.1, 607.0], [15.2, 608.0], [15.3, 613.0], [15.4, 619.0], [15.5, 621.0], [15.6, 622.0], [15.7, 623.0], [15.8, 624.0], [15.9, 634.0], [16.0, 638.0], [16.1, 639.0], [16.2, 639.0], [16.3, 641.0], [16.4, 641.0], [16.5, 641.0], [16.6, 641.0], [16.7, 642.0], [16.8, 642.0], [16.9, 643.0], [17.0, 646.0], [17.1, 650.0], [17.2, 651.0], [17.3, 653.0], [17.4, 656.0], [17.5, 659.0], [17.6, 660.0], [17.7, 665.0], [17.8, 670.0], [17.9, 671.0], [18.0, 671.0], [18.1, 674.0], [18.2, 674.0], [18.3, 685.0], [18.4, 686.0], [18.5, 686.0], [18.6, 686.0], [18.7, 687.0], [18.8, 691.0], [18.9, 697.0], [19.0, 699.0], [19.1, 700.0], [19.2, 704.0], [19.3, 704.0], [19.4, 706.0], [19.5, 709.0], [19.6, 709.0], [19.7, 710.0], [19.8, 712.0], [19.9, 713.0], [20.0, 714.0], [20.1, 716.0], [20.2, 718.0], [20.3, 720.0], [20.4, 722.0], [20.5, 722.0], [20.6, 724.0], [20.7, 725.0], [20.8, 725.0], [20.9, 727.0], [21.0, 729.0], [21.1, 729.0], [21.2, 730.0], [21.3, 731.0], [21.4, 731.0], [21.5, 732.0], [21.6, 732.0], [21.7, 733.0], [21.8, 734.0], [21.9, 737.0], [22.0, 741.0], [22.1, 743.0], [22.2, 743.0], [22.3, 744.0], [22.4, 746.0], [22.5, 749.0], [22.6, 751.0], [22.7, 753.0], [22.8, 755.0], [22.9, 756.0], [23.0, 760.0], [23.1, 761.0], [23.2, 761.0], [23.3, 765.0], [23.4, 766.0], [23.5, 781.0], [23.6, 789.0], [23.7, 793.0], [23.8, 815.0], [23.9, 818.0], [24.0, 819.0], [24.1, 835.0], [24.2, 836.0], [24.3, 837.0], [24.4, 839.0], [24.5, 839.0], [24.6, 842.0], [24.7, 843.0], [24.8, 843.0], [24.9, 844.0], [25.0, 850.0], [25.1, 851.0], [25.2, 853.0], [25.3, 853.0], [25.4, 854.0], [25.5, 855.0], [25.6, 856.0], [25.7, 856.0], [25.8, 857.0], [25.9, 858.0], [26.0, 859.0], [26.1, 862.0], [26.2, 862.0], [26.3, 864.0], [26.4, 866.0], [26.5, 868.0], [26.6, 868.0], [26.7, 870.0], [26.8, 872.0], [26.9, 873.0], [27.0, 877.0], [27.1, 882.0], [27.2, 883.0], [27.3, 883.0], [27.4, 884.0], [27.5, 887.0], [27.6, 890.0], [27.7, 891.0], [27.8, 899.0], [27.9, 906.0], [28.0, 907.0], [28.1, 907.0], [28.2, 908.0], [28.3, 911.0], [28.4, 915.0], [28.5, 917.0], [28.6, 920.0], [28.7, 921.0], [28.8, 921.0], [28.9, 924.0], [29.0, 927.0], [29.1, 928.0], [29.2, 930.0], [29.3, 930.0], [29.4, 932.0], [29.5, 934.0], [29.6, 939.0], [29.7, 940.0], [29.8, 941.0], [29.9, 943.0], [30.0, 946.0], [30.1, 951.0], [30.2, 954.0], [30.3, 954.0], [30.4, 955.0], [30.5, 956.0], [30.6, 959.0], [30.7, 960.0], [30.8, 961.0], [30.9, 961.0], [31.0, 964.0], [31.1, 965.0], [31.2, 968.0], [31.3, 970.0], [31.4, 971.0], [31.5, 974.0], [31.6, 975.0], [31.7, 978.0], [31.8, 979.0], [31.9, 980.0], [32.0, 980.0], [32.1, 986.0], [32.2, 988.0], [32.3, 989.0], [32.4, 990.0], [32.5, 991.0], [32.6, 991.0], [32.7, 991.0], [32.8, 991.0], [32.9, 995.0], [33.0, 995.0], [33.1, 997.0], [33.2, 999.0], [33.3, 1001.0], [33.4, 1004.0], [33.5, 1005.0], [33.6, 1005.0], [33.7, 1007.0], [33.8, 1010.0], [33.9, 1011.0], [34.0, 1012.0], [34.1, 1016.0], [34.2, 1018.0], [34.3, 1022.0], [34.4, 1027.0], [34.5, 1030.0], [34.6, 1032.0], [34.7, 1032.0], [34.8, 1037.0], [34.9, 1037.0], [35.0, 1061.0], [35.1, 1066.0], [35.2, 1069.0], [35.3, 1073.0], [35.4, 1076.0], [35.5, 1078.0], [35.6, 1080.0], [35.7, 1081.0], [35.8, 1106.0], [35.9, 1118.0], [36.0, 1122.0], [36.1, 1133.0], [36.2, 1143.0], [36.3, 1161.0], [36.4, 1176.0], [36.5, 1307.0], [36.6, 1310.0], [36.7, 1331.0], [36.8, 1366.0], [36.9, 1396.0], [37.0, 1400.0], [37.1, 1468.0], [37.2, 1475.0], [37.3, 1538.0], [37.4, 1539.0], [37.5, 1540.0], [37.6, 1540.0], [37.7, 1542.0], [37.8, 1543.0], [37.9, 1543.0], [38.0, 1546.0], [38.1, 1548.0], [38.2, 1548.0], [38.3, 1549.0], [38.4, 1554.0], [38.5, 1557.0], [38.6, 1557.0], [38.7, 1558.0], [38.8, 1559.0], [38.9, 1560.0], [39.0, 1566.0], [39.1, 1570.0], [39.2, 1570.0], [39.3, 1572.0], [39.4, 1579.0], [39.5, 1590.0], [39.6, 1591.0], [39.7, 1604.0], [39.8, 1607.0], [39.9, 1612.0], [40.0, 1621.0], [40.1, 1621.0], [40.2, 1622.0], [40.3, 1623.0], [40.4, 1625.0], [40.5, 1626.0], [40.6, 1626.0], [40.7, 1626.0], [40.8, 1638.0], [40.9, 1641.0], [41.0, 1642.0], [41.1, 1645.0], [41.2, 1646.0], [41.3, 1646.0], [41.4, 1646.0], [41.5, 1651.0], [41.6, 1653.0], [41.7, 1660.0], [41.8, 1661.0], [41.9, 1672.0], [42.0, 1672.0], [42.1, 1673.0], [42.2, 1673.0], [42.3, 1673.0], [42.4, 1674.0], [42.5, 1675.0], [42.6, 1678.0], [42.7, 1680.0], [42.8, 1681.0], [42.9, 1683.0], [43.0, 1685.0], [43.1, 1685.0], [43.2, 1686.0], [43.3, 1689.0], [43.4, 1692.0], [43.5, 1694.0], [43.6, 1695.0], [43.7, 1695.0], [43.8, 1696.0], [43.9, 1696.0], [44.0, 1696.0], [44.1, 1698.0], [44.2, 1704.0], [44.3, 1709.0], [44.4, 1710.0], [44.5, 1726.0], [44.6, 1737.0], [44.7, 1737.0], [44.8, 1738.0], [44.9, 1738.0], [45.0, 1739.0], [45.1, 1739.0], [45.2, 1742.0], [45.3, 1764.0], [45.4, 1791.0], [45.5, 1805.0], [45.6, 1809.0], [45.7, 1811.0], [45.8, 1834.0], [45.9, 1840.0], [46.0, 1841.0], [46.1, 1841.0], [46.2, 1841.0], [46.3, 1842.0], [46.4, 1853.0], [46.5, 1858.0], [46.6, 1883.0], [46.7, 1886.0], [46.8, 1887.0], [46.9, 1887.0], [47.0, 1902.0], [47.1, 1908.0], [47.2, 1913.0], [47.3, 1915.0], [47.4, 1917.0], [47.5, 1918.0], [47.6, 1923.0], [47.7, 1923.0], [47.8, 1924.0], [47.9, 1925.0], [48.0, 1925.0], [48.1, 1936.0], [48.2, 1937.0], [48.3, 1937.0], [48.4, 1942.0], [48.5, 1944.0], [48.6, 1946.0], [48.7, 1947.0], [48.8, 1948.0], [48.9, 1956.0], [49.0, 1956.0], [49.1, 1959.0], [49.2, 1960.0], [49.3, 1965.0], [49.4, 1965.0], [49.5, 1967.0], [49.6, 1969.0], [49.7, 1977.0], [49.8, 1977.0], [49.9, 1978.0], [50.0, 1978.0], [50.1, 1979.0], [50.2, 1988.0], [50.3, 1990.0], [50.4, 1991.0], [50.5, 1994.0], [50.6, 1994.0], [50.7, 1995.0], [50.8, 1995.0], [50.9, 1995.0], [51.0, 1996.0], [51.1, 1996.0], [51.2, 1997.0], [51.3, 1997.0], [51.4, 1998.0], [51.5, 2011.0], [51.6, 2013.0], [51.7, 2014.0], [51.8, 2014.0], [51.9, 2014.0], [52.0, 2015.0], [52.1, 2029.0], [52.2, 2032.0], [52.3, 2035.0], [52.4, 2035.0], [52.5, 2035.0], [52.6, 2036.0], [52.7, 2036.0], [52.8, 2037.0], [52.9, 2037.0], [53.0, 2037.0], [53.1, 2038.0], [53.2, 2039.0], [53.3, 2040.0], [53.4, 2040.0], [53.5, 2040.0], [53.6, 2045.0], [53.7, 2046.0], [53.8, 2046.0], [53.9, 2046.0], [54.0, 2047.0], [54.1, 2047.0], [54.2, 2048.0], [54.3, 2048.0], [54.4, 2048.0], [54.5, 2049.0], [54.6, 2053.0], [54.7, 2057.0], [54.8, 2058.0], [54.9, 2060.0], [55.0, 2061.0], [55.1, 2062.0], [55.2, 2062.0], [55.3, 2062.0], [55.4, 2062.0], [55.5, 2063.0], [55.6, 2063.0], [55.7, 2063.0], [55.8, 2065.0], [55.9, 2069.0], [56.0, 2073.0], [56.1, 2073.0], [56.2, 2076.0], [56.3, 2078.0], [56.4, 2078.0], [56.5, 2079.0], [56.6, 2081.0], [56.7, 2083.0], [56.8, 2090.0], [56.9, 2093.0], [57.0, 2093.0], [57.1, 2094.0], [57.2, 2094.0], [57.3, 2099.0], [57.4, 2100.0], [57.5, 2108.0], [57.6, 2109.0], [57.7, 2110.0], [57.8, 2111.0], [57.9, 2111.0], [58.0, 2111.0], [58.1, 2111.0], [58.2, 2119.0], [58.3, 2119.0], [58.4, 2120.0], [58.5, 2120.0], [58.6, 2121.0], [58.7, 2121.0], [58.8, 2122.0], [58.9, 2122.0], [59.0, 2123.0], [59.1, 2132.0], [59.2, 2132.0], [59.3, 2134.0], [59.4, 2136.0], [59.5, 2141.0], [59.6, 2145.0], [59.7, 2146.0], [59.8, 2146.0], [59.9, 2152.0], [60.0, 2155.0], [60.1, 2159.0], [60.2, 2159.0], [60.3, 2160.0], [60.4, 2161.0], [60.5, 2161.0], [60.6, 2165.0], [60.7, 2165.0], [60.8, 2169.0], [60.9, 2170.0], [61.0, 2172.0], [61.1, 2175.0], [61.2, 2179.0], [61.3, 2180.0], [61.4, 2181.0], [61.5, 2181.0], [61.6, 2193.0], [61.7, 2200.0], [61.8, 2200.0], [61.9, 2201.0], [62.0, 2203.0], [62.1, 2206.0], [62.2, 2207.0], [62.3, 2207.0], [62.4, 2208.0], [62.5, 2209.0], [62.6, 2209.0], [62.7, 2210.0], [62.8, 2211.0], [62.9, 2215.0], [63.0, 2216.0], [63.1, 2216.0], [63.2, 2219.0], [63.3, 2223.0], [63.4, 2224.0], [63.5, 2225.0], [63.6, 2225.0], [63.7, 2225.0], [63.8, 2230.0], [63.9, 2232.0], [64.0, 2232.0], [64.1, 2233.0], [64.2, 2233.0], [64.3, 2234.0], [64.4, 2234.0], [64.5, 2234.0], [64.6, 2235.0], [64.7, 2236.0], [64.8, 2240.0], [64.9, 2244.0], [65.0, 2245.0], [65.1, 2245.0], [65.2, 2245.0], [65.3, 2245.0], [65.4, 2246.0], [65.5, 2246.0], [65.6, 2248.0], [65.7, 2248.0], [65.8, 2249.0], [65.9, 2251.0], [66.0, 2252.0], [66.1, 2252.0], [66.2, 2253.0], [66.3, 2254.0], [66.4, 2254.0], [66.5, 2255.0], [66.6, 2265.0], [66.7, 2266.0], [66.8, 2266.0], [66.9, 2266.0], [67.0, 2267.0], [67.1, 2267.0], [67.2, 2268.0], [67.3, 2272.0], [67.4, 2273.0], [67.5, 2273.0], [67.6, 2273.0], [67.7, 2274.0], [67.8, 2274.0], [67.9, 2289.0], [68.0, 2302.0], [68.1, 2302.0], [68.2, 2303.0], [68.3, 2306.0], [68.4, 2311.0], [68.5, 2322.0], [68.6, 2324.0], [68.7, 2326.0], [68.8, 2329.0], [68.9, 2331.0], [69.0, 2349.0], [69.1, 2349.0], [69.2, 2349.0], [69.3, 2350.0], [69.4, 2350.0], [69.5, 2350.0], [69.6, 2351.0], [69.7, 2352.0], [69.8, 2353.0], [69.9, 2353.0], [70.0, 2353.0], [70.1, 2355.0], [70.2, 2355.0], [70.3, 2356.0], [70.4, 2356.0], [70.5, 2356.0], [70.6, 2356.0], [70.7, 2357.0], [70.8, 2363.0], [70.9, 2368.0], [71.0, 2369.0], [71.1, 2371.0], [71.2, 2376.0], [71.3, 2425.0], [71.4, 2429.0], [71.5, 2429.0], [71.6, 2440.0], [71.7, 2442.0], [71.8, 2443.0], [71.9, 2446.0], [72.0, 2446.0], [72.1, 2466.0], [72.2, 2467.0], [72.3, 2470.0], [72.4, 2476.0], [72.5, 2477.0], [72.6, 2478.0], [72.7, 2479.0], [72.8, 2488.0], [72.9, 2491.0], [73.0, 2492.0], [73.1, 2493.0], [73.2, 2493.0], [73.3, 2494.0], [73.4, 2494.0], [73.5, 2505.0], [73.6, 2528.0], [73.7, 2541.0], [73.8, 2544.0], [73.9, 2545.0], [74.0, 2546.0], [74.1, 2547.0], [74.2, 2548.0], [74.3, 2548.0], [74.4, 2557.0], [74.5, 2564.0], [74.6, 2567.0], [74.7, 2567.0], [74.8, 2567.0], [74.9, 2567.0], [75.0, 2568.0], [75.1, 2568.0], [75.2, 2568.0], [75.3, 2569.0], [75.4, 2569.0], [75.5, 2569.0], [75.6, 2569.0], [75.7, 2569.0], [75.8, 2569.0], [75.9, 2569.0], [76.0, 2570.0], [76.1, 2572.0], [76.2, 2579.0], [76.3, 2580.0], [76.4, 2589.0], [76.5, 2595.0], [76.6, 2596.0], [76.7, 2596.0], [76.8, 2597.0], [76.9, 2597.0], [77.0, 2598.0], [77.1, 2612.0], [77.2, 2612.0], [77.3, 2649.0], [77.4, 2651.0], [77.5, 2655.0], [77.6, 2657.0], [77.7, 2681.0], [77.8, 2683.0], [77.9, 2683.0], [78.0, 2683.0], [78.1, 2684.0], [78.2, 2685.0], [78.3, 2687.0], [78.4, 2705.0], [78.5, 2705.0], [78.6, 2705.0], [78.7, 2706.0], [78.8, 2706.0], [78.9, 2706.0], [79.0, 2707.0], [79.1, 2707.0], [79.2, 2708.0], [79.3, 2709.0], [79.4, 2710.0], [79.5, 2711.0], [79.6, 2729.0], [79.7, 2731.0], [79.8, 2734.0], [79.9, 2747.0], [80.0, 2747.0], [80.1, 2748.0], [80.2, 2749.0], [80.3, 2749.0], [80.4, 2763.0], [80.5, 2829.0], [80.6, 2830.0], [80.7, 2840.0], [80.8, 2841.0], [80.9, 2851.0], [81.0, 2852.0], [81.1, 2853.0], [81.2, 2854.0], [81.3, 2854.0], [81.4, 2855.0], [81.5, 2855.0], [81.6, 2865.0], [81.7, 2865.0], [81.8, 2879.0], [81.9, 2883.0], [82.0, 2885.0], [82.1, 2885.0], [82.2, 2886.0], [82.3, 2886.0], [82.4, 2887.0], [82.5, 2887.0], [82.6, 2887.0], [82.7, 2888.0], [82.8, 2890.0], [82.9, 2907.0], [83.0, 2907.0], [83.1, 2917.0], [83.2, 2921.0], [83.3, 2922.0], [83.4, 2922.0], [83.5, 2922.0], [83.6, 2923.0], [83.7, 2924.0], [83.8, 2924.0], [83.9, 2925.0], [84.0, 2926.0], [84.1, 2934.0], [84.2, 2935.0], [84.3, 2935.0], [84.4, 2936.0], [84.5, 2936.0], [84.6, 2936.0], [84.7, 2936.0], [84.8, 2936.0], [84.9, 2938.0], [85.0, 2940.0], [85.1, 2940.0], [85.2, 2941.0], [85.3, 2942.0], [85.4, 2946.0], [85.5, 2947.0], [85.6, 2953.0], [85.7, 2954.0], [85.8, 2964.0], [85.9, 2969.0], [86.0, 2976.0], [86.1, 2988.0], [86.2, 2988.0], [86.3, 2988.0], [86.4, 2989.0], [86.5, 2995.0], [86.6, 2996.0], [86.7, 2997.0], [86.8, 2997.0], [86.9, 3014.0], [87.0, 3035.0], [87.1, 3035.0], [87.2, 3036.0], [87.3, 3036.0], [87.4, 3036.0], [87.5, 3036.0], [87.6, 3037.0], [87.7, 3038.0], [87.8, 3038.0], [87.9, 3044.0], [88.0, 3046.0], [88.1, 3048.0], [88.2, 3049.0], [88.3, 3052.0], [88.4, 3053.0], [88.5, 3054.0], [88.6, 3054.0], [88.7, 3054.0], [88.8, 3055.0], [88.9, 3055.0], [89.0, 3057.0], [89.1, 3060.0], [89.2, 3061.0], [89.3, 3061.0], [89.4, 3063.0], [89.5, 3063.0], [89.6, 3065.0], [89.7, 3069.0], [89.8, 3069.0], [89.9, 3070.0], [90.0, 3070.0], [90.1, 3072.0], [90.2, 3072.0], [90.3, 3072.0], [90.4, 3072.0], [90.5, 3074.0], [90.6, 3074.0], [90.7, 3086.0], [90.8, 3091.0], [90.9, 3093.0], [91.0, 3108.0], [91.1, 3128.0], [91.2, 3130.0], [91.3, 3130.0], [91.4, 3131.0], [91.5, 3131.0], [91.6, 3131.0], [91.7, 3131.0], [91.8, 3132.0], [91.9, 3133.0], [92.0, 3139.0], [92.1, 3140.0], [92.2, 3149.0], [92.3, 3150.0], [92.4, 3151.0], [92.5, 3152.0], [92.6, 3152.0], [92.7, 3153.0], [92.8, 3154.0], [92.9, 3154.0], [93.0, 3156.0], [93.1, 3166.0], [93.2, 3167.0], [93.3, 3194.0], [93.4, 3208.0], [93.5, 3224.0], [93.6, 3227.0], [93.7, 3228.0], [93.8, 3229.0], [93.9, 3238.0], [94.0, 3239.0], [94.1, 3256.0], [94.2, 3267.0], [94.3, 3276.0], [94.4, 3281.0], [94.5, 3281.0], [94.6, 3281.0], [94.7, 3282.0], [94.8, 3282.0], [94.9, 3282.0], [95.0, 3283.0], [95.1, 3285.0], [95.2, 3297.0], [95.3, 3344.0], [95.4, 3408.0], [95.5, 3412.0], [95.6, 3414.0], [95.7, 3420.0], [95.8, 3421.0], [95.9, 3423.0], [96.0, 3423.0], [96.1, 3425.0], [96.2, 3425.0], [96.3, 3425.0], [96.4, 3425.0], [96.5, 3426.0], [96.6, 3448.0], [96.7, 3448.0], [96.8, 3456.0], [96.9, 3456.0], [97.0, 3457.0], [97.1, 3457.0], [97.2, 3460.0], [97.3, 3460.0], [97.4, 3460.0], [97.5, 3524.0], [97.6, 3574.0], [97.7, 3575.0], [97.8, 3592.0], [97.9, 3602.0], [98.0, 3621.0], [98.1, 3890.0], [98.2, 3891.0], [98.3, 3907.0], [98.4, 3929.0], [98.5, 3957.0], [98.6, 4012.0], [98.7, 4077.0], [98.8, 4094.0], [98.9, 4095.0], [99.0, 4096.0], [99.1, 4098.0], [99.2, 4098.0], [99.3, 4148.0], [99.4, 4154.0], [99.5, 4223.0], [99.6, 4255.0], [99.7, 4487.0], [99.8, 4518.0], [99.9, 4524.0], [100.0, 4526.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 3.0, "minX": 300.0, "maxY": 196.0, "series": [{"data": [[600.0, 105.0], [700.0, 116.0], [800.0, 100.0], [900.0, 133.0], [1000.0, 61.0], [1100.0, 19.0], [1300.0, 12.0], [1400.0, 7.0], [1500.0, 59.0], [1600.0, 111.0], [1700.0, 31.0], [1800.0, 38.0], [1900.0, 111.0], [2000.0, 145.0], [2100.0, 106.0], [2200.0, 155.0], [2300.0, 80.0], [2400.0, 54.0], [2500.0, 90.0], [2600.0, 30.0], [2800.0, 60.0], [2700.0, 53.0], [2900.0, 97.0], [3000.0, 102.0], [3100.0, 58.0], [3200.0, 46.0], [3300.0, 4.0], [3400.0, 52.0], [3500.0, 10.0], [3600.0, 4.0], [3800.0, 6.0], [3900.0, 7.0], [4000.0, 17.0], [4100.0, 5.0], [4200.0, 4.0], [4500.0, 6.0], [4400.0, 3.0], [300.0, 35.0], [400.0, 133.0], [500.0, 196.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4500.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 171.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1938.0, "series": [{"data": [[0.0, 171.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 352.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1938.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 5.9, "minX": 1.77652662E12, "maxY": 82.2189573459716, "series": [{"data": [[1.77652668E12, 44.92078488372095], [1.77652674E12, 82.2189573459716], [1.77652662E12, 5.9]], "isOverall": false, "label": "Config 3: Exp1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77652674E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 340.5, "minX": 1.0, "maxY": 3325.775510204081, "series": [{"data": [[2.0, 340.5], [3.0, 1820.25], [4.0, 427.3333333333333], [5.0, 351.0], [6.0, 1613.142857142857], [7.0, 366.8], [8.0, 1079.125], [9.0, 414.0], [10.0, 1040.0], [11.0, 940.6], [12.0, 663.3846153846154], [13.0, 698.9000000000001], [14.0, 711.8181818181818], [15.0, 448.2], [16.0, 834.0], [17.0, 628.0769230769231], [18.0, 639.9230769230769], [19.0, 751.0], [20.0, 601.1], [21.0, 642.4666666666667], [22.0, 766.8888888888889], [23.0, 591.5416666666667], [24.0, 636.8666666666667], [25.0, 615.7222222222223], [26.0, 677.0833333333335], [27.0, 631.9999999999999], [28.0, 609.1500000000001], [29.0, 540.9473684210526], [30.0, 575.3], [31.0, 569.9047619047618], [32.0, 583.7619047619047], [33.0, 601.8636363636364], [34.0, 674.1304347826089], [35.0, 640.0869565217391], [36.0, 651.9166666666664], [37.0, 707.3599999999998], [38.0, 701.7600000000001], [39.0, 719.5384615384614], [40.0, 731.7777777777778], [41.0, 746.3703703703704], [42.0, 842.5], [43.0, 853.7586206896551], [44.0, 864.1724137931034], [45.0, 878.8999999999999], [46.0, 871.8387096774194], [47.0, 943.6551724137931], [48.0, 973.6551724137931], [49.0, 991.1818181818181], [50.0, 1363.7200000000003], [51.0, 1052.1612903225805], [52.0, 1319.4516129032263], [53.0, 1377.6129032258068], [54.0, 1691.090909090909], [55.0, 1751.5882352941178], [56.0, 1790.8400000000004], [57.0, 1916.7000000000003], [58.0, 2231.710526315789], [59.0, 1880.9230769230771], [60.0, 2139.9772727272743], [61.0, 1762.6999999999998], [62.0, 1918.0270270270278], [63.0, 2020.1875000000002], [64.0, 1976.818181818182], [65.0, 2369.108695652173], [66.0, 1989.2916666666667], [67.0, 2128.1666666666674], [68.0, 2290.4500000000007], [69.0, 2100.3478260869565], [70.0, 2350.526315789474], [71.0, 2121.7500000000005], [72.0, 2324.585365853659], [73.0, 2329.625], [74.0, 2317.8666666666663], [75.0, 2311.0], [76.0, 2392.3555555555554], [77.0, 2387.6666666666665], [78.0, 2262.3636363636365], [79.0, 2566.7708333333335], [80.0, 2549.689655172414], [81.0, 2440.7391304347825], [82.0, 2778.629629629629], [83.0, 2648.0188679245293], [84.0, 2369.84], [85.0, 2642.464285714286], [86.0, 3053.8461538461534], [87.0, 3135.03448275862], [88.0, 3022.814814814815], [89.0, 2534.810344827587], [90.0, 2405.5000000000005], [91.0, 2709.1724137931033], [92.0, 2856.4999999999995], [93.0, 3025.2000000000003], [94.0, 2989.4062499999995], [95.0, 3159.3870967741937], [96.0, 2987.552631578947], [98.0, 2967.25], [99.0, 3112.3529411764703], [100.0, 3325.775510204081], [1.0, 1872.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[60.434376269809015, 1814.580251930111]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 79.0, "minX": 1.77652662E12, "maxY": 5297.6, "series": [{"data": [[1.77652668E12, 5297.6], [1.77652674E12, 4061.75], [1.77652662E12, 115.5]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77652668E12, 3623.4666666666667], [1.77652674E12, 2778.1666666666665], [1.77652662E12, 79.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77652674E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 379.7333333333333, "minX": 1.77652662E12, "maxY": 2717.091943127963, "series": [{"data": [[1.77652668E12, 1153.8938953488378], [1.77652674E12, 2717.091943127963], [1.77652662E12, 379.7333333333333]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77652674E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 379.43333333333334, "minX": 1.77652662E12, "maxY": 2717.077725118484, "series": [{"data": [[1.77652668E12, 1153.843750000001], [1.77652674E12, 2717.077725118484], [1.77652662E12, 379.43333333333334]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77652674E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.05523255813953487, "minX": 1.77652662E12, "maxY": 0.5666666666666669, "series": [{"data": [[1.77652668E12, 0.05523255813953487], [1.77652674E12, 0.07867298578199049], [1.77652662E12, 0.5666666666666669]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77652674E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 324.0, "minX": 1.77652662E12, "maxY": 730.0, "series": [{"data": [[1.77652668E12, 730.0], [1.77652662E12, 465.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77652668E12, 354.0], [1.77652662E12, 324.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77652668E12, 704.0], [1.77652662E12, 439.7]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77652668E12, 729.0], [1.77652662E12, 465.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77652668E12, 540.0], [1.77652662E12, 370.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.77652668E12, 719.3], [1.77652662E12, 463.9]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77652668E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 338.5, "minX": 1.0, "maxY": 3321.0, "series": [{"data": [[2.0, 338.5], [3.0, 400.5], [4.0, 351.5], [5.0, 375.0], [6.0, 398.0], [7.0, 382.5], [8.0, 467.0], [9.0, 450.5], [10.0, 486.0], [11.0, 447.0], [12.0, 438.5], [13.0, 489.5], [14.0, 503.0], [15.0, 504.5], [1.0, 390.0], [16.0, 490.0], [17.0, 506.0], [19.0, 539.0], [20.0, 550.0], [21.0, 570.0], [22.0, 597.0], [23.0, 623.0], [24.0, 656.0], [25.0, 686.5], [26.0, 710.0], [27.0, 721.0], [28.0, 723.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[32.0, 2040.0], [33.0, 2047.5], [35.0, 2000.5], [34.0, 3128.0], [36.0, 1538.5], [37.0, 2245.0], [38.0, 1539.0], [39.0, 2004.0], [41.0, 2429.0], [43.0, 2145.0], [45.0, 2037.0], [48.0, 2273.0], [56.0, 2988.0], [6.0, 1237.0], [15.0, 2032.0], [1.0, 3321.0], [18.0, 1969.0], [21.0, 1995.0], [22.0, 2152.0], [23.0, 1973.5], [24.0, 2494.0], [25.0, 2216.5], [26.0, 2907.0], [27.0, 2251.0], [28.0, 1647.0], [29.0, 2048.0], [30.0, 2037.5], [31.0, 1990.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 56.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 338.0, "minX": 1.0, "maxY": 3321.0, "series": [{"data": [[2.0, 338.0], [3.0, 400.0], [4.0, 351.5], [5.0, 374.5], [6.0, 398.0], [7.0, 382.0], [8.0, 467.0], [9.0, 450.0], [10.0, 486.0], [11.0, 447.0], [12.0, 438.5], [13.0, 489.5], [14.0, 503.0], [15.0, 504.5], [1.0, 387.5], [16.0, 490.0], [17.0, 505.0], [19.0, 539.0], [20.0, 550.0], [21.0, 570.0], [22.0, 597.0], [23.0, 623.0], [24.0, 655.0], [25.0, 686.5], [26.0, 710.0], [27.0, 721.0], [28.0, 723.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[32.0, 2040.0], [33.0, 2047.5], [35.0, 2000.5], [34.0, 3128.0], [36.0, 1538.5], [37.0, 2245.0], [38.0, 1539.0], [39.0, 2004.0], [41.0, 2429.0], [43.0, 2145.0], [45.0, 2037.0], [48.0, 2273.0], [56.0, 2988.0], [6.0, 1236.5], [15.0, 2032.0], [1.0, 3321.0], [18.0, 1969.0], [21.0, 1995.0], [22.0, 2152.0], [23.0, 1973.5], [24.0, 2494.0], [25.0, 2216.5], [26.0, 2907.0], [27.0, 2251.0], [28.0, 1647.0], [29.0, 2048.0], [30.0, 2037.5], [31.0, 1990.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 56.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.55, "minX": 1.77652662E12, "maxY": 24.033333333333335, "series": [{"data": [[1.77652668E12, 24.033333333333335], [1.77652674E12, 16.433333333333334], [1.77652662E12, 0.55]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77652674E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.5, "minX": 1.77652662E12, "maxY": 22.933333333333334, "series": [{"data": [[1.77652668E12, 22.933333333333334], [1.77652674E12, 17.583333333333332], [1.77652662E12, 0.5]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77652674E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.5, "minX": 1.77652662E12, "maxY": 17.583333333333332, "series": [{"data": [[1.77652668E12, 8.216666666666667], [1.77652662E12, 0.5]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.77652668E12, 14.716666666666667], [1.77652674E12, 17.583333333333332]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77652674E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.5, "minX": 1.77652662E12, "maxY": 17.583333333333332, "series": [{"data": [[1.77652668E12, 8.216666666666667], [1.77652662E12, 0.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.77652668E12, 14.716666666666667], [1.77652674E12, 17.583333333333332]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77652674E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

