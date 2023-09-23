package com.acorn.melody2.repository;

import com.acorn.melody2.entity.TestUserAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface TestUserAccountRepository extends JpaRepository<TestUserAccount, Long>{
//    여기다가 커스텀쿼리를 추가하는거라고 하네요 ^^
}
