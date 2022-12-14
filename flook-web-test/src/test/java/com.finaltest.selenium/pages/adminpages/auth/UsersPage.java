package com.finaltest.selenium.pages.adminpages.auth;

import com.finaltest.selenium.pages.adminpages.AdminBasePage;
import com.finaltest.selenium.pages.adminpages.admincomponents.AddDataForm;
import com.finaltest.selenium.pages.adminpages.admincomponents.TableHeaderAndFooter;
import org.openqa.selenium.*;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

public class UsersPage extends AdminBasePage {
    public TableHeaderAndFooter tableHeaderAndFooter;
    public AddDataForm addDataForm;

    public UsersPage(WebDriver driver) {
        super(driver);
        tableHeaderAndFooter = new TableHeaderAndFooter(this.driver);
        addDataForm = new AddDataForm(this.driver);
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
    }

    public List<String> getDataListByColumnPosition(int position) throws TimeoutException {
        String lstDataListCssSelector = ".MuiDataGrid-root .MuiDataGrid-row [data-colindex='%s']>div";
        List<WebElement> elementList = actionKeyword.findElementsCustom(
                By.cssSelector(String.format(lstDataListCssSelector, position))
        );
        List<String> dataList = new ArrayList<>();
        for (WebElement element : elementList) {
            dataList.add(element.getText());
        }
        return dataList;
    }

    public WebElement getUserActiveButtonByEmail(String email) {
        String btnUserActiveButtonXpath = "//*[text()='%s']/parent::div/following-sibling::div//button[1]";
        return actionKeyword.findElementCustom(By.xpath(String.format(btnUserActiveButtonXpath, email)));
    }

    public WebElement getUpdateUserButtonByEmail(String email) {
        String btnUpdateUserButtonXpath = "//*[text()='%s']/parent::div/following-sibling::div//button[2]";
        return actionKeyword.findElementCustom(By.xpath(String.format(btnUpdateUserButtonXpath, email)));
    }

    public WebElement getDeleteUserButtonByEmail(String email) {
        String btnDeleteUserButtonXpath = "//*[text()='%s']/parent::div/following-sibling::div//button[3]";
        return actionKeyword.findElementCustom(By.xpath(String.format(btnDeleteUserButtonXpath, email)));
    }

    public WebElement getSelectUserCheckboxByDisplayName(String displayName) {
        String chkSelectUserCheckboxXpath = "//*[contains(text(),'%s')]/../parent::div/div[1]";
        return actionKeyword.findElementCustom(By.xpath(String.format(chkSelectUserCheckboxXpath, displayName)));
    }

    public WebElement getShowHidePasswordButtonInAddUserForm() {
        String btnShowHidePasswordButtonCssSelector = "[aria-label='toggle password visibility']";
        return actionKeyword.findElementCustom(By.cssSelector(btnShowHidePasswordButtonCssSelector));
    }

    public WebElement getAddRolesEditTextInAddUserForm() {
        String edtAddRolesEditTextId = "roles";
        return actionKeyword.findElementCustom(By.id(edtAddRolesEditTextId));
    }

    public List<String> getAllResultsThatContainTheKeyWordInFilterSearchBox(String keyWord) throws InterruptedException {
        Thread.sleep(2000);
        List<String> lstResultListContainTheKeyWord = new ArrayList<>();
        try {
            for (String string: getDataListByColumnPosition(0)) {
                if (string.toLowerCase().contains(keyWord.toLowerCase())) {
                    lstResultListContainTheKeyWord.add(string);
                }
            }
            return lstResultListContainTheKeyWord;
        } catch (TimeoutException exception) {
            return lstResultListContainTheKeyWord;
        }
    }

    public UsersPage clickOnUserActiveButtonByEmail(String email) {
        actionKeyword.click(getUserActiveButtonByEmail(email));
        return new UsersPage(this.driver);
    }

    public UsersPage clickOnUpdateUserButtonByEmail(String email) {
        actionKeyword.click(getUpdateUserButtonByEmail(email));
        return new UsersPage(this.driver);
    }

    public UsersPage clickOnDeleteUserButtonByEmail(String displayName) {
        actionKeyword.click(getDeleteUserButtonByEmail(displayName));
        return new UsersPage(this.driver);
    }

    public UsersPage clickOnSelectUserCheckboxByDisplayName(String displayName) {
        actionKeyword.click(getSelectUserCheckboxByDisplayName(displayName));
        return new UsersPage(this.driver);
    }

    public UsersPage clickOnShowHidePasswordButtonInAddUserForm() {
        actionKeyword.click(getShowHidePasswordButtonInAddUserForm());
        return new UsersPage(this.driver);
    }

    public UsersPage addRolesInAddUserForm(String role) {
        actionKeyword.setText(getAddRolesEditTextInAddUserForm(), role);
        actions.sendKeys(Keys.ENTER).build().perform();
        return new UsersPage(this.driver);
    }

    public UsersPage enterInformationInFirstGroup(String displayName, String phoneNumber, String userName, String email, String passWord) {
        actionKeyword.setText(addDataForm.getFieldByLabelText("T??n hi???n th???"), displayName);
        actionKeyword.setText(addDataForm.getFieldByLabelText("S??? ??i???n tho???i"), phoneNumber);
        actionKeyword.setText(addDataForm.getFieldByLabelText("T??n ????ng nh???p"), userName);
        actionKeyword.setText(addDataForm.getFieldByLabelText("Email"), email);
        actionKeyword.setText(addDataForm.getFieldByLabelText("M???t kh???u"), passWord);
        return new UsersPage(this.driver);
    }

    public boolean verifyColumnCheckboxInColumnBoxIsDisplayByText(String text) {
        String chkColumnCheckBoxXpath = "//span[text()='%s']";
        try {
            return driver.findElement(By.xpath(String.format(chkColumnCheckBoxXpath, text))).isDisplayed();
        } catch (NoSuchElementException exception) {
            return false;
        }
    }

    public boolean verifyAllColumnCheckboxesInColumnBoxAreDisplay() {
        try {
            return verifyColumnCheckboxInColumnBoxIsDisplayByText("Checkbox selection") &&
                    verifyColumnCheckboxInColumnBoxIsDisplayByText("Stt") &&
                    verifyColumnCheckboxInColumnBoxIsDisplayByText("Avatar") &&
                    verifyColumnCheckboxInColumnBoxIsDisplayByText("Email") &&
                    verifyColumnCheckboxInColumnBoxIsDisplayByText("T??n hi???n th???") &&
                    verifyColumnCheckboxInColumnBoxIsDisplayByText("T??n ????ng nh???p") &&
                    verifyColumnCheckboxInColumnBoxIsDisplayByText("M???t kh???u") &&
                    verifyColumnCheckboxInColumnBoxIsDisplayByText("S??? ??i???n tho???i") &&
                    verifyColumnCheckboxInColumnBoxIsDisplayByText("Vai tr??") &&
                    verifyColumnCheckboxInColumnBoxIsDisplayByText("##");
        } catch (NoSuchElementException exception) {
            return false;
        }
    }

    public boolean verifyAllResultsThatContainTheKeyWorkInFiltersBox(String keyWord) throws InterruptedException {
        Thread.sleep(500);
        try {
            for (String string: getDataListByColumnPosition(0)) {
                if (!string.toLowerCase().contains(keyWord.toLowerCase())) {
                    return false;
                }
            }
            return true;
        } catch (TimeoutException exception) {
            return false;
        }
    }

    public boolean verifyAllResultsThatEqualTheKeyWorkInFiltersBox(String keyWord) throws InterruptedException {
        Thread.sleep(500);
        try {
            for (String string: getDataListByColumnPosition(0)) {
                if (!string.equalsIgnoreCase(keyWord)) {
                    return false;
                }
            }
            return true;
        } catch (TimeoutException exception) {
            return false;
        }
    }

    public boolean verifyAllResultsThatStartWithTheKeyWorkInFiltersBox(String keyWord) throws InterruptedException {
        Thread.sleep(500);
        try {
            for (String string: getDataListByColumnPosition(0)) {
                if (!string.startsWith(keyWord)) {
                    return false;
                }
            }
            return true;
        } catch (TimeoutException exception) {
            return false;
        }
    }

    public boolean verifyAllResultsThatEndWithTheKeyWorkInFiltersBox(String keyWord) throws InterruptedException {
        Thread.sleep(500);
        try {
            for (String string: getDataListByColumnPosition(0)) {
                if (!string.endsWith(keyWord)) {
                    return false;
                }
            }
            return true;
        } catch (TimeoutException exception) {
            return false;
        }
    }

    public boolean verifyAllResultsThatIsEmpty() throws InterruptedException {
        Thread.sleep(1000);
        return true;
    }

    public boolean verifyAllResultsThatIsNotEmpty() throws InterruptedException {
        Thread.sleep(500);
        try {
            for (String string: getDataListByColumnPosition(0)) {
                if (string.isEmpty()) {
                    return false;
                }
            }
            return true;
        } catch (TimeoutException exception) {
            return false;
        }
    }

    public boolean verifyAllEditTextOfFirstGroupInAddDataFormAreDisplay() throws InterruptedException {
        Thread.sleep(500);
        return addDataForm.verifyAEditTextIsDisplayByLabelText("T??n hi???n th???") &&
                addDataForm.verifyAEditTextIsDisplayByLabelText("S??? ??i???n tho???i") &&
                addDataForm.verifyAEditTextIsDisplayByLabelText("T??n ????ng nh???p") &&
                addDataForm.verifyAEditTextIsDisplayByLabelText("Email") &&
                addDataForm.verifyAEditTextIsDisplayByLabelText("M???t kh???u");
    }

    public boolean verifyAllRadioButtonOfSecondGroupInAddDataFormAreDisplay() throws InterruptedException {
        Thread.sleep(500);
        return actionKeyword.verifyElementIsDisplayByText("Active") &&
                actionKeyword.verifyElementIsDisplayByText("No Active");
    }

    public boolean verifyAllElementOfThirdGroupInAddDataFormAreDisplay() throws InterruptedException {
        Thread.sleep(500);
        return addDataForm.verifyAEditTextIsDisplayByLabelText("roles");
    }

    public boolean verifyAllElementOfLastGroupInAddDataFormAreDisplay() throws InterruptedException {
        Thread.sleep(500);
        return actionKeyword.verifyElementIsDisplayByText("Ch???n ???nh");
    }

    public boolean verifyThatTheUserHasBeenCreated(String email) throws InterruptedException {
        Thread.sleep(500);
        String lstDataListCssSelector = ".MuiDataGrid-root .MuiDataGrid-row [data-colindex='0']>div";
        try {
            return driver.findElement(By.cssSelector(lstDataListCssSelector)).getText().equals(email);
        } catch (NoSuchElementException exception) {
            return false;
        }
    }

    public boolean verifyAllInformationOfFirstGroupInUpdateDataFormAreDisplay(String displayName, String phoneNumber, String username, String email) throws InterruptedException {
        Thread.sleep(500);
        return addDataForm.verifyAEditTextAndItsValueAreDisplayByLabelTextAndValueText("T??n hi???n th???", displayName) &&
                addDataForm.verifyAEditTextAndItsValueAreDisplayByLabelTextAndValueText("S??? ??i???n tho???i", phoneNumber) &&
                addDataForm.verifyAEditTextAndItsValueAreDisplayByLabelTextAndValueText("T??n ????ng nh???p", username) &&
                addDataForm.verifyAEditTextAndItsValueAreDisplayByLabelTextAndValueText("Email", email);
    }

    public boolean verifyAllInformationOfSecondGroupInUpdateDataFormAreDisplay(String activeStatus) throws InterruptedException {
        Thread.sleep(500);
        return addDataForm.verifyARadioButtonIsCheckedByLabelTextAndValueText(activeStatus);
    }

    public boolean verifyAllInformationOfThirdGroupInUpdateDataFormAreDisplay(String roles) throws InterruptedException {
        String[] roleList = roles.split(", ");
        try {
            List<String> dataList = addDataForm.getDataListOfAComboBoxInUpdateDataFormByLabel("roles");
            if (roleList.length == dataList.size()) {
                for (int i = 0; i < roleList.length; i++) {
                    if (!roleList[i].equals(dataList.get(i))) {
                        return false;
                    }
                }
                return true;
            } else {
                return false;
            }
        } catch (NoSuchElementException | TimeoutException exception) {
            return false;
        }
    }

    public boolean verifyThatTheAvatarIsCorrectByLink(String avatarLink) {
        try {
            String[] avatarLinkInTheForm = addDataForm.getImageUploadedSrc().split("/");
            return avatarLink.equals(avatarLinkInTheForm[avatarLinkInTheForm.length - 1]);
        } catch (NoSuchElementException | TimeoutException exception) {
            return false;
        }
    }
}
