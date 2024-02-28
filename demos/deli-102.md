## Sprint DEL-102

### 🚀 [AV] Change OrderPayment update flow

- Deleting `OrderPayment` will create an amending reverse OrderPayment instead of deleting.

  <img width="400" alt="image" src="https://github.com/Maffiaco/documentation/assets/1776416/bae72ffe-421d-4bae-8f94-3b08b1e393fd">

  Deleted payment shown with reason "Manualy deleted" without action.

- Updating `OrderPayment` will create an amending OrderPayment with difference amount instead direct updating.

  <img width="400" alt="image" src="https://github.com/Maffiaco/documentation/assets/1776416/08c0c89b-ffe0-446e-871d-73a940c56afe">


  Edit payment form with disabled type. To change type, we must delete the old payment to create new payment with different type.
  <img width="400" alt="image" src="https://github.com/Maffiaco/documentation/assets/1776416/0a508553-8699-4412-9ba0-187890a12ed0">


  Amending payment shown different amount with reason.
  i.e. this case, order are paid fully `11.405.237 ₫`, then editted to `10.000.000 ₫`. We'll record an amending refund payment of `1.405.237 ₫`.

### 🚀 [AV] Fix [DELIANY-1959](https://deliany.youtrack.cloud/issue/DELIANY-1959/Bug-Products-are-missing-in-BIZ-app) products of some brands are missing

On product list, if brand > 10, some brands are show empty product list.
Rootcause: On product query, we limit only 10 brands.
Fix: Get all brands

<img width="1265" alt="image" src="https://github.com/Maffiaco/documentation/assets/1776416/57179702-14de-44fa-923a-a8209da19f38">


### 🚀 [AV] Fix [DELIANY-1955](https://deliany.youtrack.cloud/issue/DELIANY-1955/Sub-total-in-edit-view-excludes-voided-items) wrong subtotal in edit order in POS

Before, subtotal in edit order counts voided item. Fix: excluded voided item in subtotal.

Booking detail:

<img width="1061" alt="image" src="https://github.com/Maffiaco/documentation/assets/1776416/5f0403f7-911a-471a-ae89-f8518d943c2a">

Edit order:

<img width="1508" alt="image" src="https://github.com/Maffiaco/documentation/assets/1776416/a62d394a-a645-4448-a139-ea4c9d58ae39">

### 🚀 [QH] Improve UI Print bill on POS

- The text font size should be changed to 10 points, while the header font size should be changed to 12 points.
- When splitting the bill, there should be no duplication of the header or footer.
- The borders and spacing between lines in the table should be removed.
- The page margins should be reduced by half.

<img width="707" alt="image" src="https://github.com/Maffiaco/documentation/assets/1776416/04e6dd46-e25a-4338-8e6e-846da75c1c2e">

### 🚀 [QH] Fix [DELIANY-1956](https://deliany.youtrack.cloud/issue/DELIANY-1956/Bug-Wrong-number-of-addition-in-split-bill) wrong number of addition in split bill

<img width="1161" alt="image" src="https://github.com/Maffiaco/documentation/assets/1776416/3ec647f5-39e1-466e-a521-f2f0391e7897">

### 🚀 [QH] Fix [DELIANY-1953](https://deliany.youtrack.cloud/issue/DELIANY-1953/Bug-Lack-of-item-in-split-bill) Lack of item in split bill

If a user is splitting a bill and another user is adding items to the order, the items will be added to the first bill when the user saves the split bill results.

### [QH] [DELIANY-1957](https://deliany.youtrack.cloud/issue/DELIANY-1957/Enhance-generate-OTP-confirm-code) Enhance - generate OTP confirm code

When a user updates the role of an account in the Back-Office

<img width="1720" alt="image" src="https://github.com/Maffiaco/documentation/assets/1776416/4546e215-c2fb-4f97-9dfa-0e96ecb0a78f">

Previously, the user's confirm_code will be regenerated

<img width="1035" alt="image" src="https://github.com/Maffiaco/documentation/assets/1776416/43c05af7-e6d8-431f-abf1-6343e703522c">

Currently, accounts that already have a confirm_code will not be regenerated.

### [KHOA] [DELIANY-1911](https://deliany.youtrack.cloud/issue/DELIANY-1911/KDS-improvement-Improve-log-in-session-to-not-mismatch-with-other-apps) Improve log-in session to not mismatch with other apps

- Create service-account when create a prepstation
  
  <img width="1680" alt="image" src="https://github.com/Maffiaco/documentation/assets/1776416/99ef387a-0fe8-4d43-8f11-4e35a178fce5">

- Use service user to login if user does not exist show error

  <img width="1679" alt="image" src="https://github.com/Maffiaco/documentation/assets/1776416/efe3d889-c432-4b91-b1db-e50b636a8423">

- If login session conflict, logout the first session

 <video src="https://github.com/Maffiaco/documentation/assets/1776416/30c3154b-0e06-49fb-bf9c-ea58166f2c30"></video>
 

### [KHOA] [DELIANY-1908](https://deliany.youtrack.cloud/issue/DELIANY-1908/Mobile-Tet-theme-on-mobile) Tet theme on mobile

  <img width="400" alt="image" src="https://github.com/Maffiaco/documentation/assets/1776416/0278f96a-ae8b-4106-820d-161159488d11">

### [KHOA] [DELIANY-1961](https://deliany.youtrack.cloud/issue/DELIANY-1961/Hide-the-Product-on-mobile-app-when-Show-on-order-app-is-false) Hide the Product on mobile app when "Show on order app" is false

<img width="379" alt="image" src="https://github.com/Maffiaco/documentation/assets/1776416/5f778984-30fd-4de9-bf73-86c0fd60431b">

### [NN] Improve UI Print bill on POS

- Bill

* Fix lost table header on print
* Reduce spacing / padding on summary
* Refactor bill table, also add Discount row on product order
* Fix right margin to adapt with the POS printer
* Checked directly and deployed to production

![image](https://github.com/Maffiaco/documentation/assets/1776416/e3b41739-ada6-4248-8494-3dc15313a127)

- Order list
  https://deliany.youtrack.cloud/issue/DELIANY-1938/Biz-Apply-ant-design-for-Orders

* Improve order list table with fully support search/ filter
* Support more component and update the new design token from UI/UX
* Fix responsive layout
* Improve notification (support subcription on order Tab)

<img width="1728" alt="image" src="https://github.com/Maffiaco/documentation/assets/1776416/7dadab22-a4a1-482a-a1bd-1024e9733806">

- Fix error log from console / change menu items to object structure instead of children as before. Because this functionality is deprecated by Antd. Also improve the layout:

<img width="249" alt="image" src="https://github.com/Maffiaco/documentation/assets/1776416/8765be98-4141-468c-93ff-ee113f5ca60a">

### [Dat] [DELIANY-1967](https://deliany.youtrack.cloud/issue/DELIANY-1967/Improvement-Hide-fields-if-value-0d-in-final-bills) Hide fields if value = 0đ in final bills

- In Delivery orders should hide "Giảm giá trực tiếp" if value = 0đ in final bills.
- In Order reservations and split bills should hide "Đặt cọc" if value = 0đ in final bills.

Before:
<br>
![image](https://github.com/Maffiaco/documentation/assets/1776416/a42080d7-91d4-492a-a2b3-aa6898d7d415)
![image](https://github.com/Maffiaco/documentation/assets/1776416/9ef59171-005c-4ad7-bab2-8d7ff987047e)

<br>
After:
<br>
<img width="496" alt="image" src="https://github.com/Maffiaco/documentation/assets/1776416/d0ad9b6e-16f4-415b-b8f3-5f67792c2062">
<img width="496" alt="image" src="https://github.com/Maffiaco/documentation/assets/1776416/c9271bf5-4684-4603-a599-38731322c382">


### [Dat] [DELIANY-1965](https://deliany.youtrack.cloud/issue/DELIANY-1965/Improve-slug-in-Locations-settings-not-overwrite-when-update-location-name) Improve slug in Locations settings: not overwrite when update location name

- Not auto-generate slug when editing location name in Back-office.

<video src="https://github.com/Maffiaco/documentation/assets/1776416/96c86afe-8721-49ff-9125-6a63521d7bd7" />

### [Dat] [DELIANY-1966](https://deliany.youtrack.cloud/issue/DELIANY-1966/Improvement-Show-opening-hour-of-the-day) Show opening hour of the day

Improve if location opens overnight and customer book a reservation at midnight → Should show opening time of that day, from the current time when customer visit website:

- Improve opening status and opening/closing time when users visit order app early in the day.
- Allow users to select the reserved time when the restaurant opens overnight.

![image](https://github.com/Maffiaco/documentation/assets/1776416/e3ceebbe-579c-4dc7-bfab-cf8fd7fdc338)
![image](https://github.com/Maffiaco/documentation/assets/1776416/465c5c3b-efcb-46a9-9604-5d0fc582f3e6)


### [Hieu] [DELIANY-1962](https://deliany.youtrack.cloud/issue/DELIANY-1962/Create-IT-Role-in-BIZ) Create IT Role in Biz

Temporary solution:

- Remove `Customers` tab from BO
- Introduce `System Users` to replace tab `User` in BO
- `System Users` are users which aren't client/customer.

<img width="1440" alt="image" src="https://github.com/Maffiaco/documentation/assets/1776416/135b8d6a-1de8-4923-abdd-dc9e867d793a">
<img width="1440" alt="image" src="https://github.com/Maffiaco/documentation/assets/1776416/d0f7e8b8-376d-4e2b-9c58-4b795a9fab7e">

