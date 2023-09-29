import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import Container from "@mui/material/Container";
import Form  from "./components/Form/Form.js";
import React from 'react'

function Register() {


	const theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.up("md"), {
		defaultMatches: true,
	});


  return (
	<div>
	(
		<main>
			<Box
				position={"relative"}
				minHeight={"calc(100vh - 447px)"}
				display={"flex"}
				alignItems={"center"}
				justifyContent={"center"}
				height={1}
			>
				<Container>
					<Grid container spacing={6}>
						<Grid
							item
							container
							alignItems={"center"}
							justifyContent={"center"}
							xs={12}
							md={6}
						>
							<Form />
						</Grid>
						{isMd ? (
							<Grid item container justifyContent={"center"} xs={12} md={6}>
								<Box height={1} width={1} maxWidth={500}>
									<Box
										component={"img"}
										src={
											"https://assets.maccarianagency.com/svg/illustrations/drawkit-illustration4.svg"
										}
										width={1}
										height={1}
										sx={{
											filter:
												theme.palette.mode === "dark"
													? "brightness(0.8)"
													: "none",
										}}
									/>
								</Box>
							</Grid>
						) : null}
					</Grid>
				</Container>
			</Box>
		</main>
	);
	</div>
  )
}

export default Register
