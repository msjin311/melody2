package com.acorn.melody2.services;

import com.acorn.melody2.entity.TestUserAccount;
import com.acorn.melody2.repository.TestUserAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class TestUserAccountService {
    private final TestUserAccountRepository testuserAccountRepository;
    @Autowired
    public TestUserAccountService(TestUserAccountRepository testuserAccountRepository) {
        this.testuserAccountRepository = testuserAccountRepository;
    }

    public List<TestUserAccount> testgetAllUserAccount() {return testuserAccountRepository.findAll();}

    public Optional<TestUserAccount> testgetUserAccountById(Long id) { return testuserAccountRepository.findById(id); }

    public TestUserAccount testcreateUserAccount(TestUserAccount testuserAccount) {
        // Add validation or business logic if needed
        return testuserAccountRepository.save(testuserAccount);
    }

    public TestUserAccount testupdateUserAccount(Long id, TestUserAccount testupdatedUserAccount) {
        // Add validation or business logic if needed
        testupdatedUserAccount.setUserAccountId(id);
        return testuserAccountRepository.save(testupdatedUserAccount);
    }

    public void deleteUserAccount(Long id) {
        testuserAccountRepository.deleteById(id);
    }
}
