# crawl gpx spider, limit to 10 and store output in json line format file (In my Project 20)
# new terminal, cd spider
# scrapy crawl gpx -s CLOSESPIDER_PAGECOUNT=100 -o file.jl

import scrapy

class GpxSpider(scrapy.Spider):
    name = 'gpx'
    #Datenherkunft URL (Filterung: Wandern Schwierigkeit T4)
    start_urls = ['https://www.hikr.org/filter.php?act=filter&a=ped&ai=400&aa=400']

    def parse(self, response):
        for href in response.css('.content-list a::attr(href)'):
            yield response.follow(href, self.parse_detail_page)

        # follow pagination links
        for href in response.css('a#NextLink::attr(href)'):
            yield response.follow(href, self.parse)

    def parse_detail_page(self, response):
        gpx_href = [href for href in response.css('#geo_table a::attr(href)').extract() if href.endswith(".gpx")]
        if len(gpx_href) >= 1:
            yield {
                'file_urls': [gpx_href[0]],
                'difficulty': response.xpath(
                    'normalize-space(//td[normalize-space() ="Hiking grading:"]/following-sibling::td/a/text())').extract_first(),
                'user': response.css('.author a.standard::text').extract_first(),
                'name': response.css('h1.title::text').extract_first(),
                'url': response.url
            }