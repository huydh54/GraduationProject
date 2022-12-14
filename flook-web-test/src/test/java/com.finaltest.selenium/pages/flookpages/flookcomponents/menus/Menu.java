package com.finaltest.selenium.pages.flookpages.flookcomponents.menus;

import com.finaltest.selenium.pages.flookpages.flookcomponents.BaseComponent;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class Menu extends BaseComponent {
    public Menu(WebDriver driver) {
        super(driver);
    }

    @FindBy(id = "gooey-button")
    public WebElement btnLogin;

    private final String MNU_TAB_LOCATOR_BY_NAME = "//section['%s']//*[text()='%s']";

    public WebElement getTabFromMainMenuByTabName(String tabName){
        return actionKeyword.findElementCustom(
                By.xpath(String.format(
                        MNU_TAB_LOCATOR_BY_NAME, "@data-id='main-menu'", tabName
                ))
        );
    }

    public WebElement getTabFromFooterMenuByTabName(String tabName){
        return actionKeyword.findElementCustom(
                By.xpath(String.format(
                        MNU_TAB_LOCATOR_BY_NAME, "@class='main-footer'", tabName
                ))
        );
    }

    public WebElement getElementFromJoinUsBox(String elementName){
        String txtElementOfJoinUsBoxXpath = "//div[contains(@class, 'MuiDialogContent-root')]//*[contains(text(),'%s')]";
        return driver.findElement(By.xpath(String.format(txtElementOfJoinUsBoxXpath, elementName)));
    }

    public WebElement getEditTextFromJoinUsBox(String label){
        String edtUsernameXpath = "//span[contains(text(),'%s')]/../parent::fieldset/preceding-sibling::input";
        return driver.findElement(By.xpath(String.format(edtUsernameXpath, label)));
    }

    public void clickOnMainMenuJoinUsTab(){
        btnLogin.click();
    }

    public void clickOnLoginWithGoogleButton(){
        getElementFromJoinUsBox("Sign in with Google").click();
    }

    public void clickOnLoginWithFacebookButton(){
        getElementFromJoinUsBox("Sign in with FaceBook").click();
    }

    public void enterUsernameInTheUsernameEditText(String username){
        actionKeyword.setText(getEditTextFromJoinUsBox("T??n ????ng Nh???p"), username);
    }

    public void enterPasswordInThePasswordEditText(String password){
        actionKeyword.setText(getEditTextFromJoinUsBox("M???t Kh???u"), password);
    }

    public boolean allTabsOfTheJoinUsBoxAreDisplay(){
        try {
            return getElementFromJoinUsBox("????ng nh???p").isDisplayed() &&
            getElementFromJoinUsBox("????ng k??").isDisplayed() &&
            getElementFromJoinUsBox("Qu??n m???t kh???u").isDisplayed() &&
            getElementFromJoinUsBox("?????i m???t kh???u").isDisplayed();
        } catch (NoSuchElementException exception) {
            return false;
        }
    }

    public boolean loginWithGoogleAndFacebookButtonsAreDisplay(){
        try {
            return getElementFromJoinUsBox("Sign in with Google").isDisplayed() &&
            getElementFromJoinUsBox("Sign in with FaceBook").isDisplayed();
        } catch (NoSuchElementException exception) {
            return false;
        }
    }

    public boolean usernameAndPasswordFieldsAreDisplay(){
        try {
            return getEditTextFromJoinUsBox("T??n ????ng Nh???p").isDisplayed() &&
            getEditTextFromJoinUsBox("M???t Kh???u").isDisplayed();
        } catch (NoSuchElementException exception) {
            return false;
        }
    }

    public boolean rememberPasswordLinksAreDisplay(){
        try {
            return getElementFromJoinUsBox("Nh??? m???t kh???u").isDisplayed();
        } catch (NoSuchElementException exception) {
            return false;
        }
    }

    public boolean submitButtonIsDisplay(){
        try {
            return getElementFromJoinUsBox("G???i").isDisplayed();
        } catch (NoSuchElementException exception) {
            return false;
        }
    }

    public boolean verifyLoginButtonBecomesChangePassButton(){
        try {
            return btnLogin.getText().equals("?????i m???t kh???u");
        } catch (NoSuchElementException exception) {
            return false;
        }
    }

    public boolean changePassLoginButtonIsDisplay() throws InterruptedException {
        Thread.sleep(500);
        try {
            return btnLogin.isDisplayed();
        } catch (NoSuchElementException exception) {
            return false;
        }
    }

    public boolean messageIsDisplay(String message){
        try {
            return getElementFromJoinUsBox(message).isDisplayed();
        } catch (NoSuchElementException exception) {
            return false;
        }
    }

    public boolean loginTabIsSelected(){
        return getElementFromJoinUsBox("Login").getAttribute("aria-selected").equals("true");
    }

    public boolean forgotPasswordTabIsSelected(){
        return getElementFromJoinUsBox("Forgot Password").getAttribute("aria-selected").equals("true");
    }

    public boolean isLogOut() throws InterruptedException {
        Thread.sleep(500);
        try {
            return btnLogin.getText().equals("????ng Nh???p");
        } catch (NoSuchElementException exception) {
            return false;
        }
    }
}