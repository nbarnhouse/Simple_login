//
//  AuthView.swift
//  Simple_login
//
//  Created by Nicole Barnhouse on 3/22/23.
//

import SwiftUI

struct AuthView: View {
    @State private var currentViewShowing: String = "login" //login or signup
    
    
    
    var body: some View {
    
        if(currentViewShowing == "login") {
            LoginView(currentShowingView: $currentViewShowing)
        } else {
            SignupView(currentShowingView: $currentViewShowing)
                .transition(.move(edge: .bottom))
        }
    }
}

