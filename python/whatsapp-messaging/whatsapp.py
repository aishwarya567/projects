from selenium import webdriver
driver = webdriver.Chrome()
driver.get('https://web.whatsapp.com/')

name = input('enter the name of the user or group')
msg = input('enter your message:\t')
count = int(input('enter your count:'))

input('Enter anything once scanning QR code is done:\t')

user = driver.find_element_by_xpath('//span[@title = "{}"]'.format(name))
user.click()

msg_box = driver.find_element_by_class_name("input-container")
for i in range(count):
    msg_box.send_keys(msg)
    button = driver.find_element_by_class_name('compose-btn-send')
    button.close()