package com.thesis.backend.model;

import com.thesis.backend.model.enums.Role;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name="users")
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @EqualsAndHashCode.Include
    private Long userId;

    @Column(name = "first_name",nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(name = "email" ,nullable = false, unique = true)
    private String email;

    @Column(name = "password",nullable = false)
    private String password; // used to store the hashed password in the database

    @Enumerated(EnumType.STRING)
    @Column(name = "role", nullable = false)
    private Role role; // USER or ADMIN


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public String getUsername() {
        return email; // we log in via email
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true; //password does not expire
    }

    @Override
    public boolean isAccountNonExpired() {
        return true; //the account cannot expire
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true; // account is active
    }
}
