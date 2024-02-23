## Sprint DEL-102

### [AV] Change OrderPayment update flow

- Deleting `OrderPayment` will create an amending reverse OrderPayment instead of deleting.

  <img width="400" alt="image" src="https://github.com/Maffiaco/documentation/assets/61538368/295bf3a5-443c-4178-b50d-1efb79652afa">

  Deleted payment shown with reason "Manualy deleted" without action.

- Updating `OrderPayment` will create an amending OrderPayment with difference amount instead direct updating.

 <video width="600" controls src="https://github.com/Maffiaco/documentation/assets/61538368/75da1cfe-5b66-4ede-a8de-f6f99b516ab2"></video>

  Edit payment form with disabled type. To change type, we must delete the old payment to create new payment with different type.

  <img width="400" alt="Amending payment" src="https://github.com/Maffiaco/team/assets/1776416/e93f2540-686f-4c97-a4b9-735a20ec5730">

  Amending payment shown different amount with reason.
  i.e. this case, order are paid fully `11.405.237 ₫`, then editted to `10.000.000 ₫`. We'll record an amending refund payment of `1.405.237 ₫`.

### 🚀 [AV] Fix [DELIANY-1959](https://deliany.youtrack.cloud/issue/DELIANY-1959/Bug-Products-are-missing-in-BIZ-app) products of some brands are missing

On product list, if brand > 10, some brands are show empty product list.
Rootcause: On product query, we limit only 10 brands.
Fix: Get all brands

  <img width="400" alt="Missing products on product list" src="https://github.com/Maffiaco/team/assets/1776416/ee0aeb9a-e190-4cc3-9d7c-0e27b9c3c623">

### 🚀 [AV] Fix [DELIANY-1955](https://deliany.youtrack.cloud/issue/DELIANY-1955/Sub-total-in-edit-view-excludes-voided-items) wrong subtotal in edit order in POS

Before, subtotal in edit order counts voided item. Fix: excluded voided item in subtotal.

Booking detail:

  <img width="400" alt="Booking detail" src="https://github.com/Maffiaco/team/assets/1776416/be40acc4-4367-462c-b778-babbf5518720">

Edit order:

  <img width="400" alt="Edit order" src="https://github.com/Maffiaco/team/assets/1776416/b70756c2-b984-4289-9514-52c40b219088">

### 🚀 [QH] Improve UI Print bill on POS

- The text font size should be changed to 10 points, while the header font size should be changed to 12 points.
- When splitting the bill, there should be no duplication of the header or footer.
- The borders and spacing between lines in the table should be removed.
- The page margins should be reduced by half.

  <img width="400" alt="Split bill" src="https://github.com/Maffiaco/team/assets/33405334/3d92dbb3-032f-4bbc-b4c2-01c86d3557a9">

### 🚀 [QH] Fix [DELIANY-1956](https://deliany.youtrack.cloud/issue/DELIANY-1956/Bug-Wrong-number-of-addition-in-split-bill) wrong number of addition in split bill

  <img width="400" alt="image" src="https://github.com/Maffiaco/team/assets/33405334/e50f7a4f-c96f-48e4-954c-621f073b52ae">

### 🚀 [QH] Fix [DELIANY-1953](https://deliany.youtrack.cloud/issue/DELIANY-1953/Bug-Lack-of-item-in-split-bill) Lack of item in split bill

If a user is splitting a bill and another user is adding items to the order, the items will be added to the first bill when the user saves the split bill results.

### [QH] [DELIANY-1957](https://deliany.youtrack.cloud/issue/DELIANY-1957/Enhance-generate-OTP-confirm-code) Enhance - generate OTP confirm code

When a user updates the role of an account in the Back-Office

  <img width="400" alt="Screenshot 2024-02-20 at 08 05 14" src="https://github.com/Maffiaco/team/assets/33405334/29ef76c6-be6a-436e-bcde-ee7622d1b9e3">

Previously, the user's confirm_code will be regenerated

  <img width="400" alt="Screenshot 2024-02-20 at 08 10 20" src="https://github.com/Maffiaco/team/assets/33405334/c7bc497d-5d21-4893-a1a6-330d34db8666">

Currently, accounts that already have a confirm_code will not be regenerated.

### [KHOA] [DELIANY-1911](https://deliany.youtrack.cloud/issue/DELIANY-1911/KDS-improvement-Improve-log-in-session-to-not-mismatch-with-other-apps) Improve log-in session to not mismatch with other apps

- Create service-account when create a prepstation

  <img width="400" alt="Create service account" src="https://github.com/Maffiaco/team/assets/61538368/5b9b3b5e-3522-49b9-9adf-c6d4c6a92a5a">

- Use service user to login if user does not exist show error
  <img width="400" alt="image" src="https://github.com/Maffiaco/team/assets/61538368/3803e368-fb9b-4fb6-bbe4-29e96e55a34c">

- If login session conflict, logout the first session

<video src="https://github.com/Maffiaco/team/assets/61538368/790c0842-1385-467d-aea2-2e8df74179d2"></video>

### [KHOA] [DELIANY-1908](https://deliany.youtrack.cloud/issue/DELIANY-1908/Mobile-Tet-theme-on-mobile) Tet theme on mobile

<img width="400" alt="297796983-22f5e792-fff1-44ab-aabd-7f5d9250c37d" src="https://github.com/Maffiaco/team/assets/61538368/f7b8ea77-e932-46f7-aa75-a4231bfad332">

### [KHOA] [DELIANY-1961](https://deliany.youtrack.cloud/issue/DELIANY-1961/Hide-the-Product-on-mobile-app-when-Show-on-order-app-is-false) Hide the Product on mobile app when "Show on order app" is false

<img width="379" alt="image" src="https://github.com/Maffiaco/team/assets/61538368/a5e15a6e-cf79-4ebb-b1cd-6b44777b49aa">

### [NN] Improve UI Print bill on POS

- Bill

* Fix lost table header on print
* Reduce spacing / padding on summary
* Refactor bill table, also add Discount row on product order
* Fix right margin to adapt with the POS printer
* Checked directly and deployed to production

![IMG_5398](https://github.com/Maffiaco/team/assets/29590621/1867cda7-352b-4524-bc65-aa1ff4c159aa)

- Order list
  https://deliany.youtrack.cloud/issue/DELIANY-1938/Biz-Apply-ant-design-for-Orders

* Improve order list table with fully support search/ filter
* Support more component and update the new design token from UI/UX
* Fix responsive layout
* Improve notification (support subcription on order Tab)

<img width="1728" alt="image" src="https://github.com/Maffiaco/team/assets/29590621/207ab577-303c-43f7-8505-6c5f90b5ae69">

- Fix error log from console / change menu items to object structure instead of children as before. Because this functionality is deprecated by Antd. Also improve the layout:

<img width="249" alt="image" src="https://github.com/Maffiaco/team/assets/29590621/ddc9cca5-bf30-47be-837b-13479ebdb485">

### [Dat] [DELIANY-1967](https://deliany.youtrack.cloud/issue/DELIANY-1967/Improvement-Hide-fields-if-value-0d-in-final-bills) Hide fields if value = 0đ in final bills

- In Delivery orders should hide "Giảm giá trực tiếp" if value = 0đ in final bills.
- In Order reservations and split bills should hide "Đặt cọc" if value = 0đ in final bills.

Before:
<br>
<img width="450" alt="" src="https://github.com/Maffiaco/team/assets/51017791/b90ae6a3-1dfc-4395-ae01-4d9de388c749"/>
<img width="450" alt="" src="https://github.com/Maffiaco/team/assets/51017791/def89179-111d-4ed0-8abf-e9998ddac681"/>
<br>
After:
<br>
<img width="450" alt="" src="https://github.com/Maffiaco/team/assets/51017791/c3abfbc3-a540-4edb-ae33-3afe93591fbf">
<img width="450" alt="" src="https://github.com/Maffiaco/team/assets/51017791/39d50878-db99-48a6-9533-d2244fbfeaae">

### [Dat] [DELIANY-1965](https://deliany.youtrack.cloud/issue/DELIANY-1965/Improve-slug-in-Locations-settings-not-overwrite-when-update-location-name) Improve slug in Locations settings: not overwrite when update location name

- Not auto-generate slug when editing location name in Back-office.

https://github.com/Maffiaco/team/assets/51017791/e380dd48-cb2e-48d4-a992-a9b768d97691

### [Dat] [DELIANY-1966](https://deliany.youtrack.cloud/issue/DELIANY-1966/Improvement-Show-opening-hour-of-the-day) Show opening hour of the day

Improve if location opens overnight and customer book a reservation at midnight → Should show opening time of that day, from the current time when customer visit website:

- Improve opening status and opening/closing time when users visit order app early in the day.
- Allow users to select the reserved time when the restaurant opens overnight.

<img width="800" alt="" src="https://github.com/Maffiaco/team/assets/51017791/904bd700-7b3b-4c16-a5f1-f664378d6987">
<img width="800" alt="" src="https://github.com/Maffiaco/team/assets/51017791/8ce5e892-58be-46da-bc10-3a9dbda97cb2">

### [Hieu] [DELIANY-1962](https://deliany.youtrack.cloud/issue/DELIANY-1962/Create-IT-Role-in-BIZ) Create IT Role in Biz

Temporary solution:

- Remove `Customers` tab from BO
- Introduce `System Users` to replace tab `User` in BO
- `System Users` are users which aren't client/customer.

<img width="800" alt="Screen Shot 2024-02-20 at 07 46 04" src="https://github.com/Maffiaco/team/assets/40940879/e7cdc7d3-ce39-466b-b31e-4f7c78cfb85b">
<img width="800" alt="Screen Shot 2024-02-20 at 07 47 16" src="https://github.com/Maffiaco/team/assets/40940879/889fd180-c27c-4f2d-b4c4-40ccc9237e81">
