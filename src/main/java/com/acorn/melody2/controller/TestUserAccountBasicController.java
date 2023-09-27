package com.acorn.melody2.controller;

import com.acorn.melody2.entity.TestUserAccount;
import com.acorn.melody2.services.TestUserAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/test-user-accounts")
public class TestUserAccountBasicController {

    private final TestUserAccountService testuserAccountService;

    @Autowired
    public TestUserAccountBasicController(TestUserAccountService testuserAccountService) {
        this.testuserAccountService = testuserAccountService;
    }


    @PostMapping
    public ResponseEntity<TestUserAccount> testcreateUserAccount(@RequestBody TestUserAccount testuserAccount) {
        TestUserAccount testcreatedUserAccount = testuserAccountService.testcreateUserAccount(testuserAccount);
        return new ResponseEntity<>(testcreatedUserAccount, HttpStatus.CREATED);
    }


}
