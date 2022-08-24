package runner;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;
import org.testng.annotations.Test;

@Test
@CucumberOptions(
        features = "src/test/resources/flookadmin/objectoptions/useroptions.feature",
        glue = {"com/finaltest/selenium/steps/adminsteps"}
)

public class Runner extends AbstractTestNGCucumberTests {
}

